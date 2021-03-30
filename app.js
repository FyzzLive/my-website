// Setup for Express and Handle Bars and Request
const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const reqest = require('request')
const bodyParser = require('body-parser');


// Use bodyParser middleWare
app.use(bodyParser.urlencoded({extended: false}));


// Setup for Path
const path = require('path');

// Port To Listen On
const PORT = process.env.PORT || 5500;


// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set Handlebar index Get Route
app.get('/', function (req, res) {
    call_api(function(doneAPI) {
        res.render('home', {
            stock: doneAPI
        }); 
    });
});



// Set Static folder
app.use(express.static(path.join(__dirname, 'Public')));


app.listen(PORT, () => console.log('Server Started on port: ' + PORT));