const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const assembly = new Schema({
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
  price_per_item: {
    type: Number,
    default: "",
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("assembly", assembly);
