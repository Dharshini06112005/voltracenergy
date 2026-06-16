const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const blogController = require('../controllers/blogController');
const formController = require('../controllers/formController');

// Product Routes
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);

// Blog Routes
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:id', blogController.getBlogById);

// Support & Form Routes
router.post('/contact', formController.submitContact);
router.post('/complaint', formController.submitComplaint);
router.post('/partner', formController.submitPartner);

module.exports = router;
