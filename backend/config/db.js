import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://santhosh-food-del:sk7010731547@cluster0.t7s6z.mongodb.net/?').then(()=>console.log("Db connected"));

}