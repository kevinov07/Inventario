const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  ciudad: { type: String, required: true },
  codigo_postal: { type: String, required: true },
  capacidad_almacenamiento: { type: Number },
  horario_operacion: { type: String },
});

const Tienda = mongoose.model('Tienda', storeSchema);
module.exports = Tienda;
