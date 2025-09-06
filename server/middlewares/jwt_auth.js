const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).send("Not authorized");
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send("Not authorized");
        }
        req.adminId = decoded.id;
        next();
    });
};