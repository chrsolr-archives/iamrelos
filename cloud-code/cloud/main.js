/**
 * Get blogs
 */
Parse.Cloud.define("getBlog", function (request, response) {
    var queryLimit = request.params.max || 10;
    var permalink = request.params.permalink;

    var Blog = Parse.Object.extend("Blog");
    var query = new Parse.Query(Blog);

    if (permalink) query.equalTo("permalink", permalink);
    query.descending('createdAt');
    query.equalTo("isActive", true);
    query.limit(queryLimit);

    query.find({
        success: function (results) {
            var data = [];

            for (var i in results) {
                var blog = {
                    title: results[i].get('title'),
                    author: results[i].get('author'),
                    imageUrl: results[i].get('imageUrl'),
                    tags: results[i].get('tags'),
                    permalink: results[i].get('permalink'),
                    createdAt: results[i].get('createdAt'),
                    preview: results[i].get('preview'),
                    content: results[i].get('content')
                };

                data.push(blog);
            }

            response.success(data);
        },
        error: function (error) {
            response.error(error);
        }
    });

});

/**
 * Get Home Random Word
 */
Parse.Cloud.define("getRandomWord", function (request, response) {

    var Word = Parse.Object.extend("Word");
    var query = new Parse.Query(Word);

    query.descending('createdAt');
    query.equalTo("isActive", true);

    query.find({
        success: function (results) {

            var item = results[Math.floor(Math.random() * results.length)];

            var word = {
                word: item.get('word'),
                definition: item.get('definition')
            };

            response.success(word);
        },
        error: function (error) {
            response.error(error);
        }
    });
});