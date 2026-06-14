const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// LOW STOCK products
router.get("/low-stock", async (req, res) => {
  try {
    const products = await Product.find({
      $expr: { $lte: ["$quantity", "$minStock"] }
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE product
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;