const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passwordHash = require("password-hash");
mongoose.promise = Promise;

const user = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  authorID: {
    type: Schema.Types.ObjectId
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
});

user.methods = {
  checkPassword: function (inputPassword) {
    return passwordHash.verify(inputPassword, this.password)
  },
  hashPassword: function (plainTextPassword) {
    return passwordHash.generate(plainTextPassword)
  }
};

// Define pre-hooks for the save method
user.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =====NO PASSWORD PROVIDED=====');
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", user);
module.exports = User;