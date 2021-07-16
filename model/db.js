const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/pug',{
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true, 
    useNewUrlParser: true
},(error)=>{
    if(error){
        console.log('db was not conn.');
    }else{
        console.log('db connect');
    }
})
require('./model')