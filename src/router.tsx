import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { SignUpForm } from './components/auth/SignUpForm';
import { PortfolioOverview } from './components/dashboard/PortfolioOverview';
import { NewsFeed } from './components/news/NewsFeed';
import { NewsDetail } from './components/news/NewsDetail'; // Corrected import
import { AIChat } from './components/ai/AIChat';
import { RewardsPage } from './pages/RewardsPage';
import { StockPicksPage } from './pages/StockPicksPage';
import { InterestSelection } from './components/auth/InterestForm';
import { RiskAppetiteForm } from './components/auth/RiskAppetiteForm';
import { BudgetForm } from './components/auth/BudgetForm';
import { useAuth } from './contexts/AuthContext';

export const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<PortfolioOverview />} />
      <Route path="/select-interests" element={<InterestSelection />} />
      <Route path="/news" element={<NewsFeed />} />
      <Route path="/news/:id" element={<NewsDetail />} /> {/* Added route for NewsDetail */}
      <Route path="/ai-assistant" element={<AIChat />} />
      <Route path="/rewards" element={<RewardsPage />} />
      <Route path="/stock-picks" element={<StockPicksPage />} />
      <Route path="/risk-selection" element={<RiskAppetiteForm />} />
      <Route path="/budget-selection" element={<BudgetForm />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};