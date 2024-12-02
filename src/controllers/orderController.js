const Order = require('../models/Order');

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pedidos', error });
  }
}

const createOrder = async (req, res) => {
  const { cliente, producto, cantidad, estado_pedido, fecha_pedido } = req.body;
  try {
    const newOrder = new Order({ cliente, tienda, productos, total, fecha_pedido, estado });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el pedido', error });
  }
};

module.exports = { createOrder, getOrders };