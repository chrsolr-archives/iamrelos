// modules
var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config/config');

// instantiate express app
var app = express();

module.exports = function () {
    // setup env
    process.env.NODE_ENV = config.server.env;

    // use body parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // static roots
    app.use(express.static('public'));

    // routes
    var api = express.Router();
    app.use('/api', api);

    require('../routes/misc')(api);
    require('../routes/main')(app);
    require('../routes/blog')(api);

    // return instance of express
    return app;
};