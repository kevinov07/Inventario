const express = require('express');
const router = express.Router();
const { getStores, createStore } = require('../controllers/storeController');

// Crear un producto
router.post('/', createStore);

// Obtener todos las tiendas
router.get('/', getStores);

module.exports = router;
