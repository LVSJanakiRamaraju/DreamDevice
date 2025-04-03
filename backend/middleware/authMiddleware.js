const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;

exports.adminOnly = (req, res, next) => {
    if (req.user.role !== 'raja' || req.user.email !== 'rajakanumuri2005@gmail.com') {
      return res.status(403).json({ message: 'Access denied. Only the owner can access this.' });
    }
    next();
  };
