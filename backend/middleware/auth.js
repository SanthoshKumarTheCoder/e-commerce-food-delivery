import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer token"

        if (!token) {
            return res.status(401).json({ success: false, message: "No token, authorization denied" });
        }

        const decoded = jwt.verify(token, "your_secret_key"); // Replace with your secret key
        req.user = await userModel.findById(decoded.id).select("-password"); // Fetch user data

        if (!req.user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        next(); // Proceed to the next middleware
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).json({ success: false, message: "Invalid token, authorization denied" });
    }
};

export default authMiddleware;
