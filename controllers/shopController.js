exports.getHome = (req,res,next) => {
    res.render('home', {
        products: []
    });
}

