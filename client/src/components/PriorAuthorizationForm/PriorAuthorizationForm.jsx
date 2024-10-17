import  { useState } from 'react';
import API from '../../services/api';

const PriorAuthorizationForm = ({ patientId }) => {
  const [formData, setFormData] = useState({
    treatment: '',
    insurancePlan: '',
    dateOfService: '',
    diagnosisCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/authorizations', { ...formData, patientId });
      alert('Authorization request submitted');
    } catch (error) {
      console.error('Error submitting request', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="authorization-form">
      <input
        type="text"
        name="treatment"
        placeholder="Treatment"
        value={formData.treatment}
        onChange={handleChange}
      />
      <input
        type="text"
        name="insurancePlan"
        placeholder="Insurance Plan"
        value={formData.insurancePlan}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dateOfService"
        value={formData.dateOfService}
        onChange={handleChange}
      />
      <input
        type="text"
        name="diagnosisCode"
        placeholder="Diagnosis Code"
        value={formData.diagnosisCode}
        onChange={handleChange}
      />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default PriorAuthorizationForm;
