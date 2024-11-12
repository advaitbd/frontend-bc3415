import { Portfolio, PortfolioSuggestion } from "./portfolio";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getPortfolioByUserId = async (
  userId: string,
): Promise<Portfolio[]> => {
  const response = await fetch(
    `${BASE_URL}/api/portfolio/portfolios/user/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch portfolio");
  }

  return response.json();
};

export const getPortfolioRebalanceSuggestion = async (
  portfolioId: number,
): Promise<PortfolioSuggestion> => {
  const response = await fetch(
    `${BASE_URL}/api/portfolio/portfolio/${portfolioId}/rebalance/suggestion`,
  );
  console.log(response);
  if (!response.ok) throw new Error("Failed to fetch rebalance suggestion");
  return response.json();
};

export const acceptPortfolioRebalance = async (
  portfolioId: number,
): Promise<Portfolio> => {
  const response = await fetch(
    `${BASE_URL}/api/portfolio/portfolio/${portfolioId}/rebalance/accept`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
  console.log(response);
  if (!response.ok) throw new Error("Failed to accept rebalance");
  return response.json();
};
