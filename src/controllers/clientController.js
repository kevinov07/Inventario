const Client = require('../models/Client');

const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener clientes', error });
  }
}

const createClient = async (req, res) => {
  const { nombre_cliente, direccion_envio, telefono, historial_pedidos } = req.body;
  try {
    const newClient = new Client({ nombre_cliente, direccion_envio, telefono, historial_pedidos });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el cliente', error });
  }
};

module.exports = { createClient, getClients };