var request = require('request');
var ExceptionHandler = require('../modules/exception-handler');
var Blog = require('../models/blog');

module.exports = function (app, express) {

    var api = express.Router();

    app.use('/api', api);

    /**
     * Get random programming quote
     */
    api.get('/quotes', function (req, res) {
        
        var url = 'http://quotes.stormconsultancy.co.uk/random.jso';
        
        request(url, function (error, response, body) {

            if (error || response.statusCode !== 200) {
                var err = ExceptionHandler.requestJsException(response);
                return res.status(err.statusCode).send(err);
            }
            
            var json = JSON.parse(response.body);

            var quote = {
                quote: json.quote,
                author: json.author
            };
            
            return res.status(200).send(quote);
        });
    });

    /**
     * Get List of blog post.
     * Query String: {number}: limit => max amount to return.
     * Query String: {string}: permalink => permalink of specific blog post
     */
    api.get('/blogs', function(req, res){
        
        var query = { isActive: true };
        var limit = req.query.limit || 10;
        var permalink = req.query.permalink;

        if (typeof permalink !== 'undefined' && permalink !== 'undefined') query.permalink = permalink;
        
        Blog.find(query).sort({'createdAt': -1}).limit(limit).exec(function(err, data) {
            var blogs = [];
            
            if (err) throw err;
            
            data.forEach(function(value){
                blogs.push(value.toVM());
            });
            
            return res.status(200).send(blogs);
        })
    });
};