const express = require('express');
const router = express.Router();
const { getStocks, createStock } = require('../controllers/stockController');

router.post('/', createStock);

// Obtener todos los stocks
router.get('/', getStocks);

module.exports = router;