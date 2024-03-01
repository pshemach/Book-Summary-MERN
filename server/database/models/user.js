const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email addresses are unique in the collection
    lowercase: true, // Stores the email in lowercase
    trim: true, // Removes leading and trailing whitespaces
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128,
  },
});

const User = mongoose.model("User", UserSchema, "user");

module.exports = User;
