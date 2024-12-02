const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
  cantidad: { type: Number, required: true },
  estado_pedido: { type: String, required: true },
  fecha_pedido: { type: Date, required: true },
});

const Order = mongoose.model('Pedido', orderSchema);
module.exports = Order;