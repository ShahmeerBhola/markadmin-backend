const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const app=express();
require('dotenv').config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());
app.get('/',(req,res)=>res.send("Hello World"));
connectDB();
var routes=require('./routes/routes');
routes(app)
app.listen(port,()=>console.log('Node running at 5000'))
app.use(cors());
