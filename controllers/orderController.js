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

module.exports = { getOrders, createOrder,deleteOrder};