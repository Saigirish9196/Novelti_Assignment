const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minlength: 5
    },
    lastName: {
      type: String,
      required: true,
      minlength: 5
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    address1: {
      type: String,
      required: true
    },
    address2: String,
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    zipCode: {
      type: Number,
      required: true
    },
    slug: {
      type: String,
      unique: true,
      index: true
  },
    photo: {
        data: Buffer,
        contentType: String
    },
    
  },{ timestamps: true }
  );
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;