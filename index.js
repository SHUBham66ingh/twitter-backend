const express= require('express');
const app = express()

app.post("/signup" ,() =>{
    
})


const PORT=3000;

app.listen( PORT   , ()=>{
    console.log(`server connected at port ${PORT}`);
})