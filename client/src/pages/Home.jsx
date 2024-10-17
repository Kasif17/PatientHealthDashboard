import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Patient Management System</h1>
      <p>Please <Link to="/login">login</Link> to access the dashboard.</p>
    </div>
  );
};

export default Home;
