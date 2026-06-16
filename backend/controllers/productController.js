const path = require('path');
const fs = require('fs');

// Helper to load products
const getProductsData = () => {
  const filePath = path.join(__dirname, '../data/products.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
};

exports.getAllProducts = (req, res) => {
  try {
    let products = getProductsData();
    const { category } = req.query;

    if (category) {
      products = products.filter(p => p.category === category);
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products data', error: error.message });
  }
};

exports.getProductById = (req, res) => {
  try {
    const products = getProductsData();
    const product = products.find(p => p.id === req.params.id);

    if (!product) {
      return res.status(404).json({ message: `Product with ID '${req.params.id}' not found` });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error: error.message });
  }
};
