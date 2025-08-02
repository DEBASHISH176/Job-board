const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String // 'employer' or 'candidate'
});

module.exports = mongoose.model('User', userSchema);