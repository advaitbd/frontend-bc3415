import React, { createContext, useContext, useState } from "react";

interface OnboardingData {
  interests: string[];
  riskTolerance: string;
  budget: {
    range: string;
    customAmount?: string;
  };
}

interface OnboardingContextType {
  onboardingData: OnboardingData;
  updateInterests: (interests: string[]) => void;
  updateRiskTolerance: (risk: string) => void;
  updateBudget: (budget: { range: string; customAmount?: number }) => void;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined,
);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    interests: [],
    riskTolerance: "",
    budget: {
      range: "",
    },
  });

  const updateInterests = (interests: string[]) => {
    setOnboardingData((prev) => ({ ...prev, interests }));
  };

  const updateRiskTolerance = (risk: string) => {
    setOnboardingData((prev) => ({ ...prev, riskTolerance: risk }));
  };

  const updateBudget = (budget: { range: string; customAmount?: number }) => {
    setOnboardingData((prev) => ({ ...prev, budget }));
  };

  const resetOnboarding = () => {
    setOnboardingData({
      interests: [],
      riskTolerance: "",
      budget: {
        range: "",
      },
    });
  };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        updateInterests,
        updateRiskTolerance,
        updateBudget,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (undefined === context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
