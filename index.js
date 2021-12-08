const express=require('express');
const ConnectDB=require('./config/ConnectDB')
const userRoute=require('./routes/UserRouter')
const cors=require('cors');
//instance of express application 
const app=express()
require('dotenv').config({ path: './config/.env' });
//connexion of the databse
ConnectDB();
//run the server on the port 
app.listen(process.env.PORT,()=>{
    console.log('server is running on port '+process.env.PORT);
})


//midelware
app.use(express.json())
app.use('/',userRoute);
app.use(cors());