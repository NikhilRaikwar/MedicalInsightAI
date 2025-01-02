export interface Database {
  public: {
    Tables: {
      patients: {
        Row: {
          id: string;
          user_id: string;
          first_name: string;
          last_name: string;
          date_of_birth: string;
          gender: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          first_name: string;
          last_name: string;
          date_of_birth: string;
          gender?: string;
        };
        Update: {
          first_name?: string;
          last_name?: string;
          date_of_birth?: string;
          gender?: string;
        };
      };
      medical_conditions: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          icd_10_code: string | null;
          created_at: string;
        };
      };
      clinical_trials: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          status: string;
          phase: string | null;
          start_date: string | null;
          end_date: string | null;
          location: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      trial_matches: {
        Row: {
          id: string;
          patient_id: string;
          trial_id: string;
          match_score: number;
          created_at: string;
        };
      };
    };
  };
}