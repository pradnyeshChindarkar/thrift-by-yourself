const Product = require("../models/product.models");

const getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        res.send(500).json({ message: error.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.send(500).json({ message: error.message });
    }
}


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    console.log(req.body);
    res.send(req.body);
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.send(404).json({ message: "Product not found" })
        }
        const updatedProduct = await Product.findById(id);
        res.send(200).json(updatedProduct);
    } catch (error) {
        res.send(500).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.send(204);
    } catch (error) {
        res.send(500).json({ message: error.message })
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct, deleteProduct
}