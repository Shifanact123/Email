const express = require("express");
const app =express();
PORT= 7000;

require('dotenv').config();

const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

app.get("/",(req,res)=>{
    try {
        transporter.sendMail({
            from:'shifana',
            to:'ashin209@gmail.com',
            subject:'Assignment Nodejs',
            html:`<h1>heading<h1>`
        })
        res.status(200).send("email send successfully")
        
    } catch (error) {
        console.log("error");
    }

 
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
});