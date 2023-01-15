const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const inventory = new Schema(
  {
    //    name:{
    //     type:String,
    //     default:""
    //     },
    //     amount:{
    //         type:String,
    //         default:""
    //     },
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
    name: {
      type: String,
      default: "",
    },
    price_per_gram: {
      type: Number,
      default: "",
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
);
module.exports = mongoose.model("inventory", inventory);
