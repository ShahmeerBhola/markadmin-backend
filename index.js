const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser');
const connectDB = require('./config/db');
const app=express();
require('dotenv').config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());
connectDB();
app.get('/',(req,res)=>res.send("Hello World"));
var routes=require('./routes/routes');
routes(app)
app.listen(5000,()=>console.log('Node running at 5000'))
