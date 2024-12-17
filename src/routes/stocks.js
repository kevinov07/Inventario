const express = require('express');
const router = express.Router();
const { getStocks, createStock, getStockByTienda } = require('../controllers/stockController');

router.post('/', createStock);

// Obtener todos los stocks
router.get('/', getStocks);

router.get('/tienda/:tiendaId', getStockByTienda);


module.exports = router;