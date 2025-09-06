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
    const { productName, productStock, productPrice } = req.body;
    try {
        const [result] = await db.query("INSERT INTO products (name, in_stock, price) VALUES (?, ?, ?)",
            [productName, Number(productStock), Number(productPrice)]
    );
        res.status(201).json({ id: result.insertId, productName, productStock, productPrice });
        console.log("Successfully added");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add product" });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query("DELETE FROM products WHERE id = ?", [id]);
        res.status(201).json({ message: "Product deleted successfully" });
        console.log("Successfully removed");
    } catch (err) {
        res.status(500).json({ error: "Failed to delete product" });
    }
}