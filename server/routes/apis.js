var Quote = require('../models/quote');
var Blog = require('../models/blog');

module.exports = function (app, express) {

    var api = express.Router();

    app.use('/api', api);

    api.get('/quotes', function (req, res) {

        Quote.findOne({}, function(err, data) {
            if (err) throw err;

            return res.status(200).send(data);
        })
    });

    api.get('/blogs', function(req, res){
        
        Blog.find({isActive: true}, function(err, data) {
            var blogs = [];
            
            if (err) throw err;
            
            data.forEach(function(value){
                blogs.push(value.toVM());
            });
            
            return res.status(200).send(blogs);
        })
    });
};