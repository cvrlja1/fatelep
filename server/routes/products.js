const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productsController');

router.get('/', getProducts);

module.exports = router;