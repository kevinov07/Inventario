const express = require('express');
const router = express.Router();

const { createClient, getClients } = require('../controllers/clientController');

// Obtener todos los clientes
router.get('/', getClients);

// Crear un cliente
router.post('/', createClient);

module.exports = router;