const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
  tienda: { type: mongoose.Schema.Types.ObjectId, ref: "Tienda", required: true },
  cantidad_en_stock: Number,
  fecha_llegada: Date,
  fecha_ultima_actualizacion: Date,
  nivel_alerta_reposicion: Number,
});

module.exports = mongoose.model("Inventario", stockSchema);
