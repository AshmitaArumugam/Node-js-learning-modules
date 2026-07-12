const exp=require('express');
const { resolve } = require('path');
const app=exp();

app.listen(3000);

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to the Home Page');
})