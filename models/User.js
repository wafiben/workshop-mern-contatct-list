const mongoose = require("mongoose");
//model of the user 
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: { type: Number, required: true },
});
module.exports=mongoose.model('User',userSchema);
