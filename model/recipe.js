const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const recipe=new Schema({
    recipeName:{
        type:String,
        default:""
    },
    instruction:{
        type:String,
        default:""
    },
    Ingredient:[{
        name:{
            type:String,
            default:""
        },
        active:{
            type:Number,
            default:"",
        },
        price:{
            type:Number,
            default:""
        },
        amount:{
            type:String,
            default:""
        },
    }]
})
module.exports=mongoose.model('recipe',recipe)