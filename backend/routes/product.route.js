const mongoose = require("mongoose");
const express = require("express");
const productRoute = express.Router();
const jwt = require("jsonwebtoken");
const { ProductModel } = require("../model/product.model");
productRoute.use(express.json());
const { auth } = require("../middleware/auth");
const { WishListModel } = require("../model/product.model");

/**
 * @swagger
 * components:
 *   schema:
 *      Product:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            description: The auto-generated id of the product
 *          image:
 *            type: string
 *            description: image url
 *          brand:
 *            type: string
 *            description: Name of the brand
 *          description:
 *            type: string
 *            description: Information about the product
 *          price:
 *            type: integer
 *            description: Price of the product
 *          category:
 *            type: string
 *            description: Category of the product
 *          color:
 *            type: string
 *            description: Color of the product
 */

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: All the API routes related to Products
 */

/**
 * @swagger
 * /product:
 *  get:
 *     summary: This will get all the product from the database
 *     tags: [Products]
 *     respones:
 *           200:
 *               description: The list of all the products
 *           400:
 *               description: Incorrect Request!
 *
 */

/**
 * @swagger
 * /product/post:
 *  post:
 *     summary: This will post the product to the database
 *     tags: [Products]
 *     respones:
 *           200:
 *               description: The product is added to the database
 *           400:
 *               description: Incorrect Request!
 *
 */
/**
 * @swagger
 * /product/update/:id:
 *  patch:
 *     summary: This will update the product in the database
 *     tags: [Products]
 *     respones:
 *           200:
 *               description: The product is updated in the database
 *           400:
 *               description: Incorrect Request!
 *
 */
/**
 * @swagger
 * /product/delete/:id:
 *  delete:
 *     summary: This will delete the product from the database
 *     tags: [Products]
 *     respones:
 *           200:
 *               description: The product is deleted in the database
 *           400:
 *               description: Incorrect Request!
 *
 */

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

// userSide////////
productRoute.use(auth);
productRoute.post("/add", async (req, res) => {
  try {
    const wishproduct = new WishListModel(req.body);
    await wishproduct.save();
    res.status(200).json({ wishproduct });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = { productRoute };
