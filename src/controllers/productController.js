const Product = require('../models/Product');

// Crear un producto
const createProduct = async (req, res) => {
  const { nombre, descripcion, numero_serie, categoria, precio_unitario, fecha_caducidad, proveedor } = req.body;
  try {
    const newProduct = new Product({ nombre, descripcion, numero_serie, categoria, precio_unitario, fecha_caducidad, proveedor });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el producto', error });
  }
};

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

module.exports = { createProduct, getProducts };