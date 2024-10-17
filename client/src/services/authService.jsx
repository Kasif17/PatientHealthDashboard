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

export const logoutService = async () => {
  try {
    await fetchData('/auth/logout', {
      method: 'POST',
    });
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
};
