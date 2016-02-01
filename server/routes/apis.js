var Quote = require('../models/quote');

module.exports = function (app, express) {

    var api = express.Router();

    app.use('/api', api);

    api.get('/quotes', function (req, res) {

        Quote.findOne({}, function(err, data) {
            if (err) throw err;

            res.status(200).send(data);
        })
    });

    api.get('/blog', function(req, res){

    });
};