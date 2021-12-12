const express = require("express");
const router = express.Router();

const adminController = require('./../controllers/adminController');

router.get('/home', adminController.getAdminHome);
router.get('/create-product', adminController.getProductForm);
router.post('/store-product', adminController.storeProduct);

module.exports = router;