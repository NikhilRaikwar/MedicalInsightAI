import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Users, TestTube } from '../components/icons';
import { StatCard } from '../components/stats/StatCard';
import { TrialMatchesTable } from '../components/tables/TrialMatchesTable';

const MOCK_MATCHES = [
  {
    trial: 'COVID-19 Treatment Study',
    patient: 'John Doe',
    matchScore: 95,
    date: '2024-03-15',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          icon={TestTube}
          label="Active Clinical Trials"
          value={24}
          onClick={() => navigate('/trials')}
        />
        <StatCard
          icon={Activity}
          label="Trial Matches"
          value={3}
        />
        <StatCard
          icon={Users}
          label="Total Patients"
          value={128}
        />
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Recent Trial Matches
          </h3>
          <div className="mt-4">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <TrialMatchesTable matches={MOCK_MATCHES} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}