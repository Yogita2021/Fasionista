const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
  },
  {
    versionKey: false,
  }
);
// {
//   "firstname":"yogita",
//   "lastname":"mane",
//   "email":"yogita@gmail.com",
//   "password":"yogita@123"
// }
const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
