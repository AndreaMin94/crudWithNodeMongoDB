const mongodb = require("mongodb");
const Product = require("../model/Product");


exports.getAdminHome = (req, res, next) => {
    Product.fecthAll()
        .then(products => {
            res.render('admin/home', {
                products
            });
        })
        .catch(err => console.log(err))
}

exports.getProductForm = (req,res,next) => {
    const edit = req.query.edit;
    const prodId = req.params.productId;
    if(edit){
        Product.findById(prodId)
            .then(product => {
                res.render('admin/create-product', {
                    isEdit: true,
                    product
                });
            })
    } else {
        res.render('admin/create-product', {
            isEdit: false,
            product: {}
        }); 
    }
    
}

exports.storeProduct = (req,res,next) => {
    let product;
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let imageUrl = req.body.imageUrl;
    let productId = req.body.productId;
    if(!productId){
        product = new Product(title, price, description, imageUrl, null);
    } else {
        product = new Product(title, price, description, imageUrl, new mongodb.ObjectId(productId));
    }
    product.save()
    .then(result => {
        res.redirect('/')
    })
    .catch(err => console.log(err));
}

exports.deleteProduct = (req,res,next) => {
    let productId = req.body.productId;
    Product.deleteById(productId)
        .then( () => {
            res.redirect('/admin/home');
        })
}