const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  uname: {
      type: String,
      required: true,
      unique: true,
  },
  // name: {
  //   gname: {
  //     type: String,
  //     required: true,
  //   },
  //   lname: {
  //       type: String,
  //       required: true,
  //   },
  // },
  email: {
    type: String,
    required: true,
  },
  password: {
      type: String,
      required: true,
  },
});

UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;
