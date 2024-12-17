const express = require('express');
const router = express.Router();
const { createCategory, getCategories } = require('../controllers/categoryController');

// Ruta para crear una nueva categoría
router.post('/', createCategory);

// Ruta para obtener todas las categorías
router.get('/', getCategories);

module.exports = router;
