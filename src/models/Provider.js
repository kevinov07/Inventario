
const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  nombre_proveedor: { type: String, required: true },
  direccion_proveedor: { type: String },
  informacion_contacto: {
    telefono: { type: String },
    email: { type: String },
  },
  lista_productos_suministrados: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }],
});

const Provider = mongoose.model('Proveedor', providerSchema, 'proveedores');
module.exports = Provider;