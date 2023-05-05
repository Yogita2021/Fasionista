const mongoose = require("mongoose");
const express = require("express");
const productRoute = express.Router();
const jwt = require("jsonwebtoken");
const { ProductModel } = require("../model/product.model");
productRoute.use(express.json());
const { auth } = require("../middleware/auth");

productRoute.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ msg: "err" });
  }
});

productRoute.post("/post", async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
productRoute.use(auth);
productRoute.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOne({ _id: id });
    if (req.body.authorID !== product.authorID) {
      res.status(200).send({ msg: "Please Login First!!" });
    } else {
      await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
      res.status(200).send({ msg: "Data Has been Updated" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
productRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOne({ _id: id });
    if (req.body.authorID !== product.authorID) {
      res.status(200).send({ msg: "Please Login First!!" });
    } else {
      await ProductModel.findByIdAndDelete({ _id: id });
      res.status(200).send({ msg: "Data Has been deleted" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = { productRoute };
