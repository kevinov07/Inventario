const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  numero_serie: { type: String, required: true },
  categoria: { type: String},
  precio_unitario: { type: Number, required: true },
  fecha_caducidad: { type: Date, required: true},
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor' },
});

const Product = mongoose.model('Producto', productSchema);
module.exports = Product;
