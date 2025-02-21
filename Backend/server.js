const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.get( "/",(req,res)=>{
    res.send("This is get request")
})

app.listen(8080,()=>{
    console.log("This is running on port 8080")
})