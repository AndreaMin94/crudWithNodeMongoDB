const express = require("express");
const router = express.Router();

const adminController = require('./../controllers/adminController');

router.get('/home', adminController.getAdminHome);
// router.get('/create-product/:productId', adminController.getProductForm);
router.get('/create-product', adminController.getProductForm);
router.get('/edit-product/:productId', adminController.getProductForm);
router.post('/store-product', adminController.storeProduct);
router.post('/delete-product', adminController.deleteProduct);

module.exports = router;