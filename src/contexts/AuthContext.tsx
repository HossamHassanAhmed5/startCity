import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserPersona = 'explorer' | 'dream-builder' | 'city-creator' | 'enterprise-citizen' | 'investor';

interface User {
  id: string;
  name: string;
  email: string;
  persona: UserPersona;
  avatar?: string;
  company?: string;
  verified?: boolean;
}

interface AuthContextType {
  user: User | null;
  persona: UserPersona;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchPersona: (newPersona: UserPersona) => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize with demo user for development
  useEffect(() => {
    const savedUser = localStorage.getItem('velora_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    } else {
      // Demo user for development
      const demoUser: User = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        persona: 'dream-builder',
        company: 'TechFlow AI',
        verified: true
      };
      setUser(demoUser);
      setIsAuthenticated(true);
      localStorage.setItem('velora_user', JSON.stringify(demoUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate login - in real app, this would call an API
    const userData: User = {
      id: '1',
      name: 'John Doe',
      email,
      persona: 'dream-builder',
      company: 'TechFlow AI',
      verified: true
    };
    
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('velora_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('velora_user');
  };

  const switchPersona = (newPersona: UserPersona) => {
    if (user) {
      const updatedUser = { ...user, persona: newPersona };
      setUser(updatedUser);
      localStorage.setItem('velora_user', JSON.stringify(updatedUser));
    }
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('velora_user', JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    persona: user?.persona || 'explorer',
    isAuthenticated,
    login,
    logout,
    switchPersona,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};