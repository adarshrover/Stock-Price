const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStats = async (req, res) => {
  try {
    const products = await Product.find();
    const totalRevenue = products.reduce((acc, item) => acc + item.price, 0);
    res.json({
      totalProducts: products.length,
      totalRevenue,
      totalOrders: Math.floor(Math.random() * 100)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
