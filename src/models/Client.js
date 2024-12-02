const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
  nombre_cliente: { type: String, required: true },
  direccion_envio: { type: String, required: true },
  telefono: { type: String},
  historial_pedidos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' }],
});

const Client = mongoose.model('Cliente', clientSchema);
module.exports = Client;