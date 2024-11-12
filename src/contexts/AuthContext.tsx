import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string, contact: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    // Simulate API call
    const response = await fetch(`https://backend-bc3415.onrender.com/api/auth/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
      method: 'POST',
      headers: {
        'Content-Type': '*/*',
      }
    });
    console.log('Login response:', response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    console.log('Login data:', data);
    localStorage.setItem('token', data.token);
    setIsAuthenticated(true);
  };
  const signup = async (email: string, password: string, name: string, contact: string) => {
    // Simulate API call

    // Prepare data for API
    const signupdata = {
      "email": email,
      "name": name,
      "contact_info": contact, 
      "password": password
  };
  console.log('signup:', signupdata);

  // Send a POST request to the API
    const response = await fetch(`https://backend-bc3415.onrender.com/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupdata),
    });

    if (!response.ok) {
      console.log('signup response:', response);
      const errorData = await response.json();
      throw new Error(errorData.message || 'Signup failed');
    }

    const data = await response.json();
    console.log('signup data:', data);
    localStorage.setItem('token', data.token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}