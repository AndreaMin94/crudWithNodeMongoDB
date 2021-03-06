const mongodb = require('mongodb');
const getDb = require('./../utils/database').getDb;

class Product { 
    constructor(title, price, description, imageUrl, _id){
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this._id = _id;
    }

    save(){
        const db = getDb();
        let dbOperation;
        if(this._id){
            dbOperation = db.collection('products').updateOne(
                {_id: new mongodb.ObjectId(this._id)},
                {$set: this}
            )
        } else {
            dbOperation = db.collection('products').insertOne(this);
        }
        return dbOperation
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
    }    

    static findById(id){
        const db = getDb();
        return db.collection('products')
            .find({_id: new mongodb.ObjectId(id)})
            .next()
            .then(product => {
                return product
            }) 
            .catch(err => console.log(err));
    }

    static fecthAll(){
        const db = getDb();
        return db.collection('products')
            .find().toArray()
            .then(products => products)
            .catch(err => console.log(err));
    }

    static deleteById(productId){
        const db = getDb();
        return db.collection('products')
            .deleteOne({_id: new mongodb.ObjectId(productId)})
            .then(result => {
                console.log('DELETED');
            })
            .catch(err => console.log(err))
    }

}

module.exports = Product;