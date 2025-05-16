const express = require("express");
const router = express.Router();
const { getProducts, getStats } = require("../controllers/productController");

router.get("/products", getProducts);
router.get("/stats", getStats);

module.exports = router;
