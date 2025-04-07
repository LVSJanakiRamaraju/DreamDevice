import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/slices/authSlice";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const data = await login({ email, password });
      console.log("Login response:", data); // Log the response for debugging
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("token", data.token); // fix: was using 'res' before
      dispatch(loginSuccess({ ...data, role: data.user.role }));
      if (data.user.role === "client") {
        navigate("/client-dashboard");
      } else if (data.user.role === "expert") {
        navigate("/expert-dashboard");
      } else if (data.user.role === "admin") {
        navigate("/admin-dashboard");
      }
    } catch (err) {
      dispatch(loginFailure(err.message || "Login failed"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 text-black dark:text-white w-full max-w-md p-8 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 dark:bg-red-200 rounded">
            {error}
          </div>
        )}

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
          className="w-full mb-6 px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
