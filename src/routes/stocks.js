const express = require('express');
const router = express.Router();
const { getStocks, createStock, getStockByTienda } = require('../controllers/stockController');

router.post('/', createStock);

// Obtener todos los stocks
router.get('/', getStocks);

// Obtener stock por tienda y rango de fechas
router.get('/tienda-stock', getStockByTienda);

module.exports = router;