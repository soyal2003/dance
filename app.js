const express=require('express')
const app=express()
const path=require('path')
const port=8000

app.use('/public' ,express.static('public'))
app.use(express.urlencoded())

app.set('view engine','pug')//set the templte engine
app.set('views',path.join(__dirname,"views"))//set the views directry

//endponts
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params)
})
app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params)
})


app.listen(port,(req,res)=>{
    console.log(`server started at ${port}`);
})