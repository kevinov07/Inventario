const Provider = require('../models/Provider');

const getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proveedores', error });
  }
}

const createProvider = async (req, res) => {
  const { nombre_proveedor, direccion_proveedor, informacion_contacto, lista_productos_suministrados} = req.body;
  try {
    const newProvider = new Provider({ nombre_proveedor, direccion_proveedor, informacion_contacto, lista_productos_suministrados });
    await newProvider.save();
    res.status(201).json(newProvider);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el proveedor', error });
  }
};

module.exports = { createProvider, getProviders };