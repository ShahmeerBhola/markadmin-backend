const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const expenses=new Schema({
    data:[{
    quantity:{
        type: Number,
        default:"",
    },
    quantity_Type:{
        type:String,
        default:"",
    },price:{
        type: Number,
        default:"",
    },
    vendor:{
        type:String,
        default:"",
    },
    name:{
        type:String,
        default:"",
    },price_per_gram:{
        type: Number,
        default:"",
    },
    isIngredient:{
        type:Boolean,
        default:"",
    },
    isEditing:{
        type:Boolean,
        default:"",
    }
    }]
})
module.exports=mongoose.model('expenses',expenses)