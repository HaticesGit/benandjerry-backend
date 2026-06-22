const Order = require("../models/Order");

const getOrders = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
};

const createOrder = async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
};

const deleteOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
};

const getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.json(order);
};

const updateOrderStatus = async (req, res) => {
    const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(order);
};

module.exports = { getOrders, createOrder,deleteOrder, getOrderById, updateOrderStatus};