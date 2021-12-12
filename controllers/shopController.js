const Product = require("../model/Product");

exports.getHome = (req,res,next) => {
    Product.fecthAll()
        .then(products => {
            res.render('home', {
                products
            });
        })
        .catch(err => console.log(err))
}

