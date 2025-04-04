import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Dream Device</h1>
      <p>Select an option below to continue:</p>
      <Link to="/login">
        <button style={{ margin: '10px' }}>Login</button>
      </Link>
      <Link to="/register">
        <button style={{ margin: '10px' }}>Register</button>
      </Link>
    </div>
  );
};

export default Home;
