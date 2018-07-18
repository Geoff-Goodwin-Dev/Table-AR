const mongoose = require("mongoose");
const Schema = mongoose.Schema;


  const user = new Schema({
    username: {
      type: String,
      trim: true,
      required: "Username is Required"
    },
    authorID: {
      type: Schema.Types.ObjectId
    },
    passwordKey: {
      type: String,
      trim: true,
      required: "Password is Required"
    },
    email: {
      type: String,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
  });

  const User = mongoose.model("User", user);

module.exports = User;