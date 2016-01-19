
module.exports = function (app, express) {

    var api = express.Router();

    app.use('/api', api);

    api.get('/test', function (req, res) {
        res.json('API WORKING!!!');
    });
};