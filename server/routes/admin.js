const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const pool = require("../config/db.js");
const bcrypt = require("bcrypt");
const {verifyToken} = require("../middlewares/jwt_auth");

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const [rows] = await pool.query("SELECT * FROM admins WHERE username = ?", [username]);
    const admin = rows[0];
    if (!admin) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;

