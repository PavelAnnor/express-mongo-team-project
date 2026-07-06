import express from "express"
import {connectDB} from "./conn.js"
const app = express();
const PORT = 3000;



app.get("/",(req,res)=>{

    res.send("Pavel's Branch!")
})

app.listen(PORT,()=>{
    console.log("Sever running")
    connectDB()
})