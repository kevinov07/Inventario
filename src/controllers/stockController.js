
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

// Obtener stock por tienda con nombre del producto, id y cantidad en stock
const getStockByTienda = async (req, res) => {
  const { tiendaId } = req.params; // Captura el ID de la tienda desde los parámetros de la URL
  try {
    const stocks = await Stock.find({ tienda: tiendaId })
      .select('producto cantidad_en_stock') // Proyección para mostrar solo los campos deseados
      .populate('producto', 'nombre'); // Populate para traer el nombre del producto

    if (stocks.length === 0) {
      return res.status(404).json({ message: 'No se encontraron stocks para esta tienda' });
    }

    // Formatear respuesta para claridad
    const formattedStocks = stocks.map(stock => ({
      id: stock.producto._id,
      nombre: stock.producto.nombre,
      cantidad_en_stock: stock.cantidad_en_stock
    }));

    res.status(200).json(formattedStocks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener stock por tienda', error });
  }
};

module.exports = { createStock, getStocks, getStockByTienda};