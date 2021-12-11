const bodyParser = require("body-parser");
const express = require("express");

const mongoConnect = require('./utils/database').mongoConnect;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

mongoConnect( ( ) => {
    app.listen(3000);
})