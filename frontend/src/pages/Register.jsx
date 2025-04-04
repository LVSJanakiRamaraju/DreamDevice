import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("buyer");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      email: email,
      password: password,
      role: userType,
    };
    try {
      await register(userData);
      navigate("/login");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister} className="p-6 bg-gray-200 rounded-lg">
        <h2 className="text-2xl mb-4">Register</h2>
        {error && <p className="text-red-500">{JSON.stringify(error)}</p>}
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="role">You are a:</label>
        <select name="role" value={formData.role} onChange={(e) => setUserType(e.target.value)} required>
          <option value="client">Client</option>
          <option value="expert">Expert</option>
        </select>
        <button className="bg-green-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
}

export default Register;
