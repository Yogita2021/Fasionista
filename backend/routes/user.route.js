const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRoute = express.Router();
const { UserModel } = require("../model/user.model");
// userRoute.use(express.json);

// user-registeration route
userRoute.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      res.status(400).json({ msg: "User already exist!!!" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        // Store hash in your password DB.
        let newUser = new UserModel({
          firstname,
          lastname,
          email,
          password: hash,
        });
        await newUser.save();
        res.status(200).json({ msg: "New User registered successfully!!!" });
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// user-login route
userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });

    if (!user) {
      res.status(400).json({ msg: "Please register first!!!" });
    } else {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          var token = jwt.sign(
            { authorID: user._id, author: user.firstname },
            "masai"
          );
          res.status(200).json({ msg: "Login successfull!!!", token: token });
        } else {
          res.status(200).json({ msg: "Wrong password!!!" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { userRoute };
