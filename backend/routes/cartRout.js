import express from 'express'
import { addToCart,removeFromCart,getCart } from '../controller/cartController.js'
import authMiddleWare from '../middleware/middleware.js'

const cartRout=express.Router()

cartRout.post("/add",authMiddleWare,addToCart)
cartRout.post("/remove",authMiddleWare,removeFromCart)
cartRout.post("/get",authMiddleWare,getCart)

export default cartRout