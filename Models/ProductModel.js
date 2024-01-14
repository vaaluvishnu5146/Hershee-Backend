const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  normalPrice: {
    type: Number,
    required: true,
  },
  actualPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  offerId: {
    type: mongoose.Types.ObjectId,
    ref: "offer",
    required: false,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("product", ProductSchema);
