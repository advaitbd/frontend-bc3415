import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, TrendingUp, LineChart } from 'lucide-react';
import { useOnboarding } from '../../contexts/OnboardingContext';

interface RiskLevel {
  id: string;
  name: string;
  description: string;
  expectedReturn: string;
  volatility: string;
}

const riskLevels: RiskLevel[] = [
  {
    id: 'conservative',
    name: 'Conservative',
    description: 'Focus on preserving capital with steady, modest returns',
    expectedReturn: '4-6%',
    volatility: 'Low',
  },
  {
    id: 'moderate',
    name: 'Moderate',
    description: 'Balance between growth and stability',
    expectedReturn: '6-8%',
    volatility: 'Medium',
  },
  {
    id: 'aggressive',
    name: 'Aggressive',
    description: 'Maximize growth potential with higher risk tolerance',
    expectedReturn: '8-12%',
    volatility: 'High',
  },
];

export const RiskAppetiteForm = () => {
  const { updateRiskTolerance } = useOnboarding();
  const [selectedRisk, setSelectedRisk] = useState<string>('moderate');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateRiskTolerance(selectedRisk);
    navigate('/budget-selection');
  };

  const getRiskIcon = (id: string) => {
    switch (id) {
      case 'conservative': return <Shield className="w-5 h-5" />;
      case 'moderate': return <LineChart className="w-5 h-5" />;
      case 'aggressive': return <TrendingUp className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">What's your risk appetite?</h2>
        <p className="text-gray-600 mt-2">Choose your investment risk tolerance level</p>
      </div>

      {riskLevels.map(risk => (
        <div
          key={risk.id}
          onClick={() => setSelectedRisk(risk.id)}
          className="flex flex-col p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-6 h-6 border rounded">
              {selectedRisk === risk.id && <div className="w-4 h-4 bg-blue-600 rounded-sm" />}
            </div>
            {getRiskIcon(risk.id)}
            <span className="font-medium">{risk.name}</span>
          </div>
          <div className="ml-9">
            <p className="text-sm text-gray-500 mb-2">{risk.description}</p>
            <div className="flex gap-4 text-sm">
              <span className="text-blue-600">Expected Return: {risk.expectedReturn}</span>
              <span className="text-gray-600">Volatility: {risk.volatility}</span>
            </div>
          </div>
        </div>
      ))}

      <button 
        onClick={handleSubmit}
        className="col-span-full mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};