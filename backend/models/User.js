const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['client', 'expert', 'admin'], 
    default: 'client' 
  },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.pre('save', function (next) {
  if (this.role === 'raja' && this.email !== 'rajakanumuri2005@gmail.com') {
    return next(new Error('Only the platform owner can be an admin.'));
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
