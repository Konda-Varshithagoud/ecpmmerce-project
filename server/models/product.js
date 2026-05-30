const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  brand: String,
  category: String,
  description: String,
  price: Number,
  countInStock: Number,
  rating: Number,
  numReviews: Number
}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;