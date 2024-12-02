const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/orderController');

// Obtener todos los pedidos
router.get('/', getOrders);

// Crear un pedido
router.post('/', createOrder);

module.exports = router;