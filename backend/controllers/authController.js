const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    try {
      const { username, email, password, role } = req.body;
  
      const assignedRole = (role === 'raja' && email !== 'rajakanumuri2005@gmail.com') ? 'client' : role;
  
      const newUser = new User({ username, email, password, role: assignedRole });
      await newUser.save(); 
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
