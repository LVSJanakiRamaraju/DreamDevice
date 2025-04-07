const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());

const cors = require("cors");

const allowedOrigins = [
    'https://dream-device.vercel.app'
  ];
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials: true }));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
