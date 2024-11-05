import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { PortfolioOverview } from './components/dashboard/PortfolioOverview';
import { NewsFeed } from './components/news/NewsFeed';
import { AIChat } from './components/ai/AIChat';
import { RewardsPage } from './pages/RewardsPage';
import { StockPicksPage } from './pages/StockPicksPage';
import { useAuth } from './contexts/AuthContext';

export const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<PortfolioOverview />} />
      <Route path="/news" element={<NewsFeed />} />
      <Route path="/ai-assistant" element={<AIChat />} />
      <Route path="/rewards" element={<RewardsPage />} />
      <Route path="/stock-picks" element={<StockPicksPage />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};