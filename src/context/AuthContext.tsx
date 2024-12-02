import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    // Здесь будет реальная логика авторизации
    try {
      // Имитация запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error('Ошибка авторизации');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    // Здесь будет реальная логика регистрации
    try {
      // Имитация запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error('Ошибка регистрации');
    }
  };
  //bla bla bla

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
};
