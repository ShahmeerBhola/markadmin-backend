const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const orders=new Schema({
    ContactName:{
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'contacts'
    },
    P12_Break_Up_Bar:{
        type:Number,
        default:""
    },
    P15_Break_Up_Bar:{
        type:Number,
        default:""
    },
    XL_Bar:{
        type:Number,
        default:""
    },
    Small_square:{
        type:Number,
        default:""
    },
    Bar_type:{
        type:String,
        default:""
    },
    Customer_Material:{
        type:Number,
        default:""
    },
    Customer_Material_Weight:{
        type:Number,
        default:""
    },
    active_ingredient:{
        type:Number,
        default:""
    },
    totalBar:{
        type:Number,
        default:""
    },flavorss:[{
        name:{
            type:String,
            default:""
        },
        price:{
            type:Number,
            default:""
        },
        amount:{
            type:Number,
            default:""
        },
    }]
})
module.exports=mongoose.model('orders',orders)