const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const assembly=new Schema({
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
module.exports=mongoose.model('assembly',assembly)