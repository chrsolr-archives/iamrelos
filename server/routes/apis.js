var request = require('request');
var Quote = require('../models/quote');
var Blog = require('../models/blog');

module.exports = function (app, express) {

    var api = express.Router();

    app.use('/api', api);

    api.get('/quotes', function (req, res) {
        // NOTE: Get random programming quote from this url: http://quotes.stormconsultancy.co.uk/random.json
        // returns: (id: int), (author: string), (quote: string), (permalink: string)
        var url = 'http://quotes.stormconsultancy.co.uk/random.json';
        
        request(url, function (error, response, body) {
            if (error && response.statusCode !== 200) throw error;
            
            var json = JSON.parse(response.body);
            
            var quote = {
                quote: json.quote,
                author: json.author
            };
            
            return res.status(200).send(quote);
        });
    });

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