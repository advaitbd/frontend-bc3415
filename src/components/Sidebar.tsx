import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "./Layout";
import { X } from "lucide-react";

interface SidebarProps {
  onClose: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <nav className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="flex items-center justify-between p-4 lg:hidden">
        <h2 className="font-semibold text-gray-900">Menu</h2>
        <button onClick={onClose} className="p-2 text-gray-500">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
