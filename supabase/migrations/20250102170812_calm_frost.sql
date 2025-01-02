/*
  # Initial Schema for MedicalInsightAI

  1. New Tables
    - `patients`
      - Basic patient information and medical history
    - `medical_conditions`
      - Database of medical conditions
    - `clinical_trials`
      - Clinical trial information and requirements
    - `trial_conditions`
      - Mapping between trials and relevant medical conditions
    - `patient_conditions`
      - Patient's medical conditions
    - `trial_matches`
      - Matches between patients and trials

  2. Security
    - Enable RLS on all tables
    - Policies for authenticated access
*/

-- Create tables
CREATE TABLE IF NOT EXISTS patients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  first_name text NOT NULL,
  last_name text NOT NULL,
  date_of_birth date NOT NULL,
  gender text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS medical_conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  icd_10_code text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS clinical_trials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  status text NOT NULL,
  phase text,
  start_date date,
  end_date date,
  location text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS trial_conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trial_id uuid REFERENCES clinical_trials(id) ON DELETE CASCADE,
  condition_id uuid REFERENCES medical_conditions(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(trial_id, condition_id)
);

CREATE TABLE IF NOT EXISTS patient_conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE,
  condition_id uuid REFERENCES medical_conditions(id) ON DELETE CASCADE,
  diagnosis_date date,
  created_at timestamptz DEFAULT now(),
  UNIQUE(patient_id, condition_id)
);

CREATE TABLE IF NOT EXISTS trial_matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE,
  trial_id uuid REFERENCES clinical_trials(id) ON DELETE CASCADE,
  match_score float NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(patient_id, trial_id)
);

-- Enable Row Level Security
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE clinical_trials ENABLE ROW LEVEL SECURITY;
ALTER TABLE trial_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE trial_matches ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own patient data"
  ON patients FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own patient data"
  ON patients FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Anyone can view medical conditions"
  ON medical_conditions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view clinical trials"
  ON clinical_trials FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view trial conditions"
  ON trial_conditions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can view their own patient conditions"
  ON patient_conditions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM patients
      WHERE patients.id = patient_conditions.patient_id
      AND patients.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can view their own trial matches"
  ON trial_matches FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM patients
      WHERE patients.id = trial_matches.patient_id
      AND patients.user_id = auth.uid()
    )
  );