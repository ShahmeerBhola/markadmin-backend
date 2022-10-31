const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const inventory=new Schema({
    data:[{
       name:{
        type:String,
        default:""
        },
        amount:{
            type:String,
            default:""
        },
    }]
})
module.exports=mongoose.model('inventory',inventory)