const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    mongoClient.connect(
        'mongodb+srv://andreamin:New_york1994@cluster0.qoxxx.mongodb.net/crud?retryWrites=true&w=majority'
    )
    .then(client => {
        _db = client.db();
        callback();
    })
    .catch(err => console.log(err));
}


const getDb = () => {
    if(_db) return _db;
    throw "No database found";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
