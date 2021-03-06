const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoConnect = require('./utils/database').mongoConnect;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shopRoutes');
const adminRoutes = require('./routes/adminRoutes');


app.use(shopRoutes);
app.use('/admin',adminRoutes);

mongoConnect( ( ) => {
    app.listen(3000);
})