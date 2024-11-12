export interface PortfolioSuggestion {
    current_composition: Record<string, number>;
    suggested_composition: Record<string, number>;
    expected_return: number;
    portfolio_id: number;
  }
  
export interface Portfolio {
    user_id: string;
    composition: Record<string, number>;
    current_value: number;
    forecasted_value: number;
    portfolio_id: number;
    created_at: string;
    updated_at: string;
  }