import express from "express";
import userModel from "../models/userModel.js";
import authMiddleware from "../middleware/auth.js"; // ✅ Import authentication middleware

const router = express.Router();

// ✅ Protected route to get user details
router.get("/me", authMiddleware, async (req, res) => {
    try {
        res.json({ success: true, admin: req.user.admin, user: req.user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;
