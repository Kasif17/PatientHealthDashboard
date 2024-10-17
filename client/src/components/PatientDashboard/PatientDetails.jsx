import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/patients/${id}`); 
        const data = await response.json();
        setPatient(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient details:', error);
        setLoading(false);
      }
    };

    fetchPatientDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!patient) return <div>Patient not found.</div>;

  return (
    <div className="patient-details">
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
      <p>Treatment: {patient.treatment}</p>
      <p>Contact: {patient.contact}</p>
      <p>Address: {patient.address}</p>
    </div>
  );
};

export default PatientDetails;
