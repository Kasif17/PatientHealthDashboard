import { fetchData } from './api';

export const getPatients = async () => {
  try {
    return await fetchData('/patients');
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export const getPatientById = async (id) => {
  try {
    return await fetchData(`/patients/${id}`);
  } catch (error) {
    console.error(`Error fetching patient with id ${id}:`, error);
    throw error;
  }
};
