const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const inventory = new Schema({
  quantity: {
    type: Number,
    default: "",
  },
  quantity_Type: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: "",
  },
  product: {
    type: String,
    default: "",
  },
  flavor: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  price_per_gram: {
    type: Number,
    default: "",
  },
  totalQuantity: {
    type: Number,
    default: "",
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});
module.exports = mongoose.model("inventory", inventory);
