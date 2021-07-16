const express=require('express')
const app=express()
const path=require('path')
const bodyParser=require("body-parser")
const port=8000
require('./model/db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/public' ,express.static('public'))
// app.use(express.urlencoded())

app.set('view engine','pug')//set the templte engine
app.set('views',path.join(__dirname,"views"))//set the views directry

//endponts
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params)
})


app.post('/contact', function(req, res) {
    var name = req.body.name;
    var phone = req.body.phone;
    var email=req.body.email;
    // var docs=req.body.docs;
    var address=req.body.address

    var schema = new Schema(req.body);
    schema.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
    // console.log("post received: %s %s", name ,email,address,phone);

app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params)
})
app.get('/about',(req,res)=>{
    const params={}
    res.status(200).render('about.pug',params)
})
app.get('/services',(req,res)=>{
    const params={}
    res.status(200).render('services.pug',params)
})
app.get('/class',(req,res)=>{
    const params={}
    res.status(200).render('class.pug',params)
})
app.listen(port,(req,res)=>{
    console.log(`server started at ${port}`);
})