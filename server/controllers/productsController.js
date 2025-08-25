const db = require("../config/db.js");


// GET products
exports.getProducts = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM products");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to get products" });
    }
};

// POST products
exports.addProduct = async (req, res) => {
    const { name, in_stock, price } = req.body;
    try {
        const [result] = db.query("INSERT INTO products (name, in_stock, price) VALUES (?, ?, ?)",
            [name, in_stock, price]
    );
        res.status(201).json({ id: result.insertId, name, in_stock, price });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add product" });
    }
};