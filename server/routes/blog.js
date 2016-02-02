var Blog = require('../models/blog');

/**
 * Get List of blog post.
 * Query String: {number}: limit => max amount to return.
 * Query String: {string}: permalink => permalink of specific blog post
 */
module.exports = function (api) {
    api.get('/blogs', function (req, res) {

        var limit = req.query.limit || 10;
        var query = {isActive: true, permalink: req.query.permalink};

        if (typeof query.permalink === 'undefined' || query.permalink === 'undefined')
            delete query.permalink;

        Blog.get(query, limit, function (data) {
            var blogs = [];

            data.forEach(function (value) {
                blogs.push(value.toVM());
            });

            return res.status(200).send(blogs);
        });
    });
};