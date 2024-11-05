import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "./Layout";

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed p-2 bottom-0 left-0 right-0 rounded-lg shadow-sm bg-white border-t border-gray-200 lg:hidden">
      <div className="flex justify-around">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center py-2 px-3 ${
                isActive ? "text-indigo-600" : "text-gray-600"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
