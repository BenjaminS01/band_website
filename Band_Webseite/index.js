var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
// var setupController = require('./controllers/setupController');
// var apiController = require('./controllers/apiController');

var port = /*process.env.PORT ||*/ 3000;


const routes = require('./config/routes.js');
const Router = require('./core/router.js');
const router = new Router(app,routes);
router.setup();


app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

/*
app.get('/', (req, res) =>{
   // res.send('HUHU!!!!');
})
*/
// mongoose.connect(config.getDbConnectionString());
//setupController(app);
//apiController(app);

app.listen(port);