const mongoose = require('mongoose');

const User = mongoose.model("user",{
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
module.exports=User