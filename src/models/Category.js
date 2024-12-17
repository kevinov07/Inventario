const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true, // Elimina espacios al inicio y al final
  },
  descripcion: {
    type: String,
    default: '',
  },
  fecha_creacion: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
