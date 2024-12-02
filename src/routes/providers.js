const express = require('express');
const router = express.Router();

const { createProvider, getProviders } = require('../controllers/providerController');

// Obtener todos los proveedores
router.get('/', getProviders);

// Crear un proveedor
router.post('/', createProvider);

module.exports = router;