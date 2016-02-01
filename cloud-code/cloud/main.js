
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