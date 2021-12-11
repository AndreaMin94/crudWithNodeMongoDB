const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoConnect = require('./utils/database').mongoConnect;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

mongoConnect( ( ) => {
    app.listen(3000);
})