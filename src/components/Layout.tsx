import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Bot, LineChart, Newspaper, Trophy, ThumbsUp } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/onboarding'].includes(location.pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        {/* Mobile sidebar backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-30 lg:z-0`}
        >
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 lg:p-6 w-full">{children}</main>
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