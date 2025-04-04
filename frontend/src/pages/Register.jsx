import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("client");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      role: userType,
    };
    try {
      await register(userData);
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white dark:bg-gray-800 text-black dark:text-white w-full max-w-md p-8 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="role" className="block mb-2 font-medium">
          You are a:
        </label>
        <select
          id="role"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          required
        >
          <option value="client">Client</option>
          <option value="expert">Expert</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
