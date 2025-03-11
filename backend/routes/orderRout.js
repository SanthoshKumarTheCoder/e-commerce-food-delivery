import express from "express"
import authMiddleware from "../middleware/middleware.js"
import { placeOrder, userOrder, verifyOrder , listOrder, updateStatus } from "../controller/orderConterler.js"
import authMiddleWare from "../middleware/middleware.js"; 


const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.get("/list",listOrder)
orderRouter.post("/status",updateStatus)
orderRouter.post("/order", authMiddleWare,userOrder)

export default orderRouter;