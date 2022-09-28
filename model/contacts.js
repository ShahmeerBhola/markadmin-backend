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
    POCity:{
        type:String,
        default:"",
    },
    POZipCode:{
        type:String,
        default:"",
    },
    POCountry:{
        type:String,
        default:""
    }
})
module.exports=mongoose.model("contacts",contacts)