const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
   phone:{
       type:Number
   },
   address:{
       type:String
   }
})
module.exports=mongoose.model('user',schema)