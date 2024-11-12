import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign, Wallet, PiggyBank, Briefcase } from "lucide-react";
import { useOnboarding } from "../../contexts/OnboardingContext";

export interface BudgetRange {
  id: string;
  name: string;
  lowerLimit?: number;
  upperLimit?: number;
  range: string;
  description: string;
}

const budgetRanges: BudgetRange[] = [
  {
    id: "starter",
    name: "Starter",
    range: "$500 - $5,000",
    lowerLimit: 500,
    upperLimit: 5000,
    description: "Perfect for beginning your investment journey",
  },
  {
    id: "growth",
    name: "Growth",
    range: "$5,000 - $25,000",
    lowerLimit: 5000,
    upperLimit: 25000,
    description: "Build your wealth with a substantial portfolio",
  },
  {
    id: "premium",
    name: "Premium",
    range: "$25,000+",
    lowerLimit: 25000,
    upperLimit: 25000,
    description: "Maximize opportunities with significant capital",
  },
];

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const BudgetForm = () => {
  const { onboardingData, updateBudget } = useOnboarding();
  const [selectedBudget, setSelectedBudget] = useState<string>("growth");
  const [customAmount, setCustomAmount] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const budgetData = {
      range: selectedBudget,
      customAmount: customAmount ? parseInt(customAmount) : 0,
    };

    updateBudget(budgetData);

    const requestBody = {
      investment_preferences: onboardingData.interests.join(","),
      risk_tolerance: onboardingData.riskTolerance,
      budget: customAmount
        ? parseInt(customAmount)
        : budgetRanges.find((budget) => budget.id === selectedBudget)
            ?.upperLimit || 0,
      financial_goals: "long-term-growth",
      user_id: localStorage.getItem("userId"),
    };

    try {
      const response = await fetch(
        `${BASE_URL}/api/user_profile/user_profile/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(requestBody),
        },
      );

      if (response.ok) {
        navigate("/stock-picks");
      } else {
        throw new Error("Failed to save preferences");
      }
    } catch (error) {
      console.error("Error saving preferences:", error);
    }
  };

  const getBudgetIcon = (id: string) => {
    switch (id) {
      case "starter":
        return <PiggyBank className="w-5 h-5" />;
      case "growth":
        return <Wallet className="w-5 h-5" />;
      case "premium":
        return <Briefcase className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Investment Budget</h2>
        <p className="text-gray-600 mt-2">
          Select your investment budget range
        </p>
      </div>

      {budgetRanges.map((budget) => (
        <div
          key={budget.id}
          onClick={() => setSelectedBudget(budget.id)}
          className="flex flex-col p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-6 h-6 border rounded">
              {selectedBudget === budget.id && (
                <div className="w-4 h-4 bg-blue-600 rounded-sm" />
              )}
            </div>
            {getBudgetIcon(budget.id)}
            <span className="font-medium">{budget.name}</span>
          </div>
          <div className="ml-9">
            <p className="text-lg font-semibold text-blue-600 mb-1">
              {budget.range}
            </p>
            <p className="text-sm text-gray-500">{budget.description}</p>
          </div>
        </div>
      ))}

      <div className="mt-4 p-4 rounded-lg border">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom Amount (Optional)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter custom amount"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="col-span-full mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Complete Setup
      </button>
    </div>
  );
};
