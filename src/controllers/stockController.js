
const Stock = require('../models/Stock');

// Crear un stock
const createStock = async (req, res) => {
  const { producto, tienda, cantidad_en_stock, fecha_llegada, fecha_ultima_actualizacion, nivel_alerta_reposicion } = req.body;
  try {
    const newStock = new Stock({ producto, tienda, cantidad_en_stock, fecha_llegada, fecha_ultima_actualizacion, nivel_alerta_reposicion });
    await newStock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el stock', error });
  }
};

// Obtener todos los stocks
const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener stocks', error });
  }
};

module.exports = { createStock, getStocks };