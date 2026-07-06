import express from "express"
import {connectDB} from "./conn.js"
const app = express();
const PORT = 3000;
import Product from "./models/product.js"
// import router from "./routes/listingandReviews.js"

// app.use(router)

app.listen(PORT,()=>{
    console.log("Sever running")
    connectDB()
})