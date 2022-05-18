const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  uname: {
      type: String,
      required: true,
      unique: true,
  },
  name: {
    gname: {
      type: String,
      required: true,
    },
    lname: {
        type: String,
        required: true,
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
      type: String,
      required: true,
  },
});

const User = model('User', UserSchema);

module.exports = User;
