const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');

// Obtener todos los productos
router.get('/', getProducts);

// Crear un producto
router.post('/', createProduct);

module.exports = router;
