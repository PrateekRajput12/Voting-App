const express=require("express")
const app = express()
const connectDB=require("./config/database")
require('dotenv').config()

connectDB().then(()=>{
    console.log("DB Connection established");
    app.listen(process.env.PORT,()=>{
        console.log("Server started on port 8000");
    })
})
.catch((err)=>{
    console.error("Error connecting to DB",err);
})