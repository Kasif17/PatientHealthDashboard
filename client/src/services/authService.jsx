// src/services/authService.jsx
import { fetchData } from './api';

export const loginService = async (credentials) => {
  try {
    const response = await fetchData('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    return response;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const signupService = async (name, email, password) => {
  try {
    const response = await fetchData('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    return response;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

// You should also export any other functions like logoutService if needed.
