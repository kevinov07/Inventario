const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();  // Para cargar variables de entorno

const app = express();
app.use(express.json());  // Middleware para parsear JSON

const PORT = process.env.PORT || 5000;

// Conectar a MongoDB
connectDB();

// Importar rutas
const productRoutes = require('./routes/products');
const storeRoutes = require('./routes/stores');
const stockRoutes = require('./routes/stocks');
const clientRoutes = require('./routes/clients');
const providerRoutes = require('./routes/providers');
const orderRoutes = require('./routes/orders');


// Usar las rutas
app.use('/api/products', productRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/orders', orderRoutes);



// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor en funcionamiento!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
