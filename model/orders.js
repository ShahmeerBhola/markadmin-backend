const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const orders=new Schema({
    ContactName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"contacts",
    },
    date:{
        type:String,
        default:"",
    },
    Customer_Provider:{
        type:String,
        default:"",
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
    types_Of_Bar:{
        type:String,
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
        type:String,
        default:""
    },
    active_ingredient:{
        type:Number,
        default:""
    },
    totalBar:{
        type:Number,
        default:""
    },
     status:{
        type:String,
        default:""
    },
    flavorss:[{
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
            type:Number,
            default:""
        },
    }]
})
module.exports=mongoose.model('orders',orders)