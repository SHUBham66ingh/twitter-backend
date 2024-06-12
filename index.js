const express= require('express');
const app = express()
app.get('/' , (req,res)=>{
    res.send("hello shubham singh")
})

app.get('/user' , (req,res)=>{
    res.send("hello user how are you")
})

app.post('/' , (req,res)=>{
    res.send("got a post request")
})


const PORT=3000;

app.listen( PORT   , ()=>{
    console.log(`server connected at port ${PORT}`);
})