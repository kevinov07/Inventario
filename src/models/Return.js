const mongoose = require('mongoose');
const returnSchema = new mongoose.Schema({
  pedido_relacionado: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' },
  motivo_devolucion: { type: String, required: true },
  cantidad_devuelta: { type: Number, required: true },
  fecha_devolucion: { type: Date, required: true },
});