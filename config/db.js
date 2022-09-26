const mongoose =require('mongoose');

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.mongoURI,{
        useUnifiedTopology: true,
      useNewUrlParser: true,
        })
        console.log("Mongoose connected")

    }
    catch(err){
        console.log(err,"err")
    }
}
module.exports=connectDB