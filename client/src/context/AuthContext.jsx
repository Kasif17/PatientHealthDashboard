// src/context/AuthContext.jsx
import  { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService, signupService } from '../services/authService'; // No need to rename these imports

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const userData = await loginService({ email, password }); // Pass as an object
      setUser(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const userData = await signupService(name, email, password);
      setUser(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
