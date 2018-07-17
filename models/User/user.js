const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passwordHash = require("password-hash");

const userSchema = new Schema ({
  username: { type: String, unique: true, required: false },
  password: { type: String, unique: false, required: false }
});

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return passwordHash.verify(inputPassword, this.password)
  },
  hashPassword: function (plainTextPassword) {
    return passwordHash.generate(plainTextPassword)
  }
};

// Define pre-hooks for the save method
userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/User/user.js =====NO PASSWORD PROVIDED=====');
    next()
  } else {
    console.log('models/User/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;