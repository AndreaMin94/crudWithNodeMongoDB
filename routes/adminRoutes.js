const express = require("express");
const router = express.Router();

const adminController = require('./../controllers/adminController');

router.get('/home', adminController.getAdminHome);


module.exports = router;