import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SearchFilter from './SearchFilter';

const PatientList = () => {
  const { user } = useAuth();
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/patients'); // Replace with your actual backend URL
        const data = await response.json();
        setPatients(data);
        setFilteredPatients(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPatients(filtered);
    } else {
      setFilteredPatients(patients);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/patient/${id}`);
  };

  return (
    <div className="patient-list">
      <h2>Welcome, {user?.name}</h2>
      <SearchFilter onSearch={handleSearch} />
      <ul>
        {filteredPatients.map((patient) => (
          <li key={patient.id} className="patient-item">
            <span>{patient.name} - {patient.condition}</span>
            <button onClick={() => handleViewDetails(patient.id)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
