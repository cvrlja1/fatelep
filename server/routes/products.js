const express = require('express');
const router = express.Router();
const jwt = require("../middlewares/jwt_auth.js");
const { getProducts, addProduct, deleteProduct} = require('../controllers/productsController');

router.get('/', getProducts);
router.post('/add',  jwt.verifyToken, addProduct);
router.delete('/delete/:id',  jwt.verifyToken, deleteProduct);

module.exports = router;