const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
  {
    login: {
      type: String,
      required: [true, 'Login is required'],
      unique: true,
      minlength: [6, 'Login needs to be at least six characters long'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Login needs to be at least six characters long'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: 'user' }
);

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.static.login = async function (login, password) {
  const user = this.findOne({ login });
  const message = 'Wrong login and/or password';

  if (user === null) {
  } else {
    const auth = bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else {
      return message;
    }
  }
};

const User = mongoose.model('user', userSchema);

module.exports = User;
