const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const expenses = new Schema({
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
  vendor: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  price_per_gram: {
    type: Number,
    default: "",
  },
  isIngredient: {
    type: Boolean,
    default: false,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("expenses", expenses);
