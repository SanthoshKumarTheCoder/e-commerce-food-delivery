import express, { Router } from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodrout.js";
import userRouter from "./routes/UserRout.js";
import 'dotenv/config'
import cartRout from "./routes/cartRout.js";
import orderRouter from "./routes/orderRout.js";
// import dotenv from "dotenv";
import dotenv from 'dotenv';
dotenv.config();
console.log("JWT_SECRET from .env:", process.env.JWT_SECRET);


// app config
const app = express()
const port =process.env.PORT || 5008

// middleware
app.use(express.json())
app.use(cors());

//coonectBD
connectDB();

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRout)
app.use("/api/order",orderRouter)
app.use("/api/user",Router);

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
