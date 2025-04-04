import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};


export const register = async (userData) => {
    try {
        const res = await axios.post(`${API}/auth/register`, userData);
        return res.data;
    } catch (err) {
        console.error("Registration error:", err.response?.data || err.message);
        throw err.response?.data || err;
    }
};
