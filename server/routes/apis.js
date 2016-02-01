var Quote = require('../models/quote');
var Blog = require('../models/blog');

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
        
        Blog.find({}, function(err, data) {
            var blogs = [];
            
            if (err) throw err;
            
            blogs.forEach(function(value){
                blogs.push(value.toVM());
            });
            console.log(blogs);
            res.status(200).send(blogs);
        })
    });
};