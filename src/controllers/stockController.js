
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

// Obtener stock por tienda
// Obtener stock por tienda y rango de fechas
const getStockByTienda = async (req, res) => {
  const { tienda, fechaInicio, fechaFin } = req.query;

  try {
    if (!tienda || !fechaInicio || !fechaFin) {
      return res.status(400).json({
        message: 'Por favor proporciona el ID de la tienda, fechaInicio y fechaFin',
      });
    }

    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    const stocks = await Stock.find({
      tienda: tienda,
      fecha_llegada: { $gte: inicio, $lte: fin },
    });

    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener el stock por tienda y rango de fechas',
      error,
    });
  }
};

module.exports = { createStock, getStocks, getStockByTienda };