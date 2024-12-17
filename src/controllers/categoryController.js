const Category = require('../models/Category');

// Crear una nueva categoría
const createCategory = async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    // Verifica si ya existe una categoría con el mismo nombre
    const categoriaExistente = await Category.findOne({ nombre });
    if (categoriaExistente) {
      return res.status(400).json({ message: 'La categoría ya existe' });
    }

    const nuevaCategoria = new Category({ nombre, descripcion });
    await nuevaCategoria.save();

    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la categoría', error });
  }
};

// Obtener todas las categorías
const getCategories = async (req, res) => {
  try {
    const categorias = await Category.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las categorías', error });
  }
};

module.exports = { createCategory, getCategories };
