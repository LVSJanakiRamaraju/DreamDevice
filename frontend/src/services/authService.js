import axios from "axios";

const API_URL = "http://localhost:5000"; // Adjust backend URL if needed

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {  // Add `/api/auth/`
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};
