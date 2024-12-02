const mongoose = require('mongoose');
require('dotenv').config();

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
    process.exit(1);  // Detiene el proceso si hay un error
  }
};

module.exports = connectDB;
