"use-strict";
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const contacts=new Schema({
    ContactName:{
        type:String,
        default:"",
    },
    EmailAddress:{
        type:String,
        default:"",
    },
    FirstName:{
        type:String,
        default:"",
    },
    LastName:{
        type:String,
        default:"",
    },
    AccountNumber:{
        type:String,
        default:"",
    },
    PhoneNumber:{
        type:String,
        default:"",
    },
    Mailto:{
        type:String,
        default:"",
    },
    AddressLine1:{
        type:String,
        default:"",
    }, 
    AddressLine2:{
        type:String,
        default:"",
    }, 
    AddressLine3:{
        type:String,
        default:"",
    },
    City:{
        type:String,
        default:"",
    },
    State:{
        type:String,
        default:"",
    },
    Zip:{
        type:String,
        default:"",
    },
    Country:{
        type:String,
        default:"",
    },
    BillingMailTo:{
        type:String,
        default:"", 
    },
    BillingAddressLine1:{
        type:String,
        default:"", 
    },
    BillingAddressLine2:{
        type:String,
        default:"", 
    },
    BillingAddressLine3:{
        type:String,
        default:"", 
    },  
    BillingCity:{
        type:String,
        default:"", 
    },
    BillingState:{
        type:String,
        default:"", 
    },
    BillingZip:{
        type:String,
        default:"", 
    },
     BillingCountry:{
        type:String,
        default:"", 
    },

})
module.exports=mongoose.model("contacts",contacts)