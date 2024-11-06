import { Bell, Settings, User, Menu } from "lucide-react";
import logo from "../assets/logo.png";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const { logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 transition-all duration-200 ${
        scrolled
          ? "bg-white/70 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button - aligned left */}
          <button
            onClick={onMenuClick}
            className="p-2 text-gray-500 bg-white rounded-md shadow-md lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* App name with custom logo - centered */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Fin Advisor Logo" className="h-7 w-7" />
            <h1 className="text-xl font-semibold text-gray-900">Fin Advisor</h1>
          </div>

          {/* Right-aligned icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={logout}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
