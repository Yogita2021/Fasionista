const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    image: { type: String, require: true },
    brand: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
    color: { type: String, require: true },
    authorID: String,
  },
  {
    versionKey: false,
  }
);
// {
//   "image":
//   "brand":
//   "description":
//   "price":
//   "category":
//   "color":
// }

const ProductModel = mongoose.model("product", productSchema);
const WishListModel = mongoose.model("wishlistProduct", productSchema);

module.exports = { ProductModel, WishListModel };
