import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">

      <div className="text-center p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dream Device</h1>

        <div className="flex justify-center space-x-4">
          <Link to="/login">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
