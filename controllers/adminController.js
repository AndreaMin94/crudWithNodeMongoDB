const Product = require("../model/Product");

exports.getAdminHome = (req, res, next) => {
    res.render('admin/home');
}

exports.getProductForm = (req,res,next) => {
    res.render('admin/create-product', {
        isEdit: false,
        product: []
    });
}

exports.storeProduct = (req,res,next) => {
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let imageUrl = req.body.imageUrl;
    let productId = req.body.productId;
    let product = new Product(title, price, description, imageUrl, productId);
    product.save()
    .then(result => {
        res.redirect('/')
    })
    .catch(err => console.log(err));
}