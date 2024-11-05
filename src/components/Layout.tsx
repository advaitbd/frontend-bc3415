import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Bot, LineChart, Newspaper, Trophy, ThumbsUp } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/onboarding'].includes(location.pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export const navigationItems = [
  {
    label: 'Dashboard',
    icon: LineChart,
    href: '/dashboard',
  },
  {
    label: 'News Feed',
    icon: Newspaper,
    href: '/news',
  },
  {
    label: 'AI Assistant',
    icon: Bot,
    href: '/ai-assistant',
  },
  {
    label: 'Rewards',
    icon: Trophy,
    href: '/rewards',
  },
  {
    label: 'Stock Picks',
    icon: ThumbsUp,
    href: '/stock-picks',
  },
];