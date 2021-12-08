//connect the database to the server
const mongoose=require('mongoose')
const ConnectDB=async()=>{
    try {
       await  mongoose.connect(process.env.URL)
        console.log('databse is connected')
    } catch (error) {
        console.log('database is not connected')
    }
}

module.exports=ConnectDB;
