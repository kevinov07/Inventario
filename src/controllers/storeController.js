const Store = require('../models/Store');

// Crear un producto
const createStore = async (req, res) => {
  const { nombre, direccion, ciudad, codigo_postal, capacidad_almacenamiento, horario_operacion} = req.body;
  try {
    const newStore = new Product({ nombre, direccion, ciudad, codigo_postal, capacidad_almacenamiento, horario_operacion});
    await newStore.save();
    res.status(201).json(newStore);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la tienda', error });
  }
};

// Obtener todos las tiendas
const getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tiendas', error });
  }
};

module.exports = { createStore, getStores };
