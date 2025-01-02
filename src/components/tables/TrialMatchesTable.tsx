import React from 'react';

interface TrialMatch {
  trial: string;
  patient: string;
  matchScore: number;
  date: string;
}

interface TrialMatchesTableProps {
  matches: TrialMatch[];
}

export function TrialMatchesTable({ matches }: TrialMatchesTableProps) {
  return (
    <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Trial
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Patient
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Match Score
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {matches.map((match, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {match.trial}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {match.patient}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {match.matchScore}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {match.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}