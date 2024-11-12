import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Bitcoin, Cpu, Battery, Building2, LineChart, TrendingUp, Coins } from 'lucide-react';
import { useOnboarding } from '../../contexts/OnboardingContext';

interface Interest {
  id: string;
  name: string;
  description: string;
}

const interests: Interest[] = [
  { id: 'technology', name: 'Technology', description: 'Software, Hardware, AI, and Innovation' },
  { id: 'energy', name: 'Energy', description: 'Renewable Energy, Oil & Gas, Nuclear' },
  { id: 'real-estate', name: 'Real Estate', description: 'Commercial, Residential, REITs' },
  { id: 'crypto', name: 'Crypto', description: 'Bitcoin, Ethereum, DeFi, Web3' },
  { id: 'markets', name: 'Markets', description: 'Stocks, Bonds, ETFs' },
  { id: 'economy', name: 'Economy', description: 'Global Economics, Policy, Trade' },
  { id: 'commodities', name: 'Commodities', description: 'Gold, Silver, Agricultural Products' },
];

export const InterestSelection = () => {
  const { updateInterests } = useOnboarding();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(interests.map(interest => interest.id));
  const navigate = useNavigate();

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateInterests(selectedInterests);
    navigate('/risk-selection');
  };

  const getInterestIcon = (id: string) => {
    switch (id) {
      case 'technology': return <Cpu className="w-5 h-5" />;
      case 'energy': return <Battery className="w-5 h-5" />;
      case 'real-estate': return <Building2 className="w-5 h-5" />;
      case 'crypto': return <Bitcoin className="w-5 h-5" />;
      case 'markets': return <LineChart className="w-5 h-5" />;
      case 'economy': return <TrendingUp className="w-5 h-5" />;
      case 'commodities': return <Coins className="w-5 h-5" />;
      default: return null;
    }
  };

  // Hardcode to combination of interests
  // Tech + Energy = Tesla
  // Tech + Crypto = Coinbase
  // Energy + Real Estate = Brookfield Renewable

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-semibold text-center">
        Please choose topics of your interest
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interests.map(interest => (
          <div
            key={interest.id}
            onClick={() => toggleInterest(interest.id)}
            className="flex items-center gap-3 p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-center w-6 h-6 border rounded">
              {selectedInterests.includes(interest.id) && <Check className="w-4 h-4 text-blue-600" />}
            </div>
            {getInterestIcon(interest.id)}
            <div className="flex flex-col">
              <span className="font-medium">{interest.name}</span>
              <span className="text-sm text-gray-500">{interest.description}</span>
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
    </div>
  );
}; 