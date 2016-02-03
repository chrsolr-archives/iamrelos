var request = require("request");
var helper = require('../modules/helper');

function MiscApis(api) {

    api.get('/quotes', function (req, res) {

        if (!helper.isAjaxRequest(req))
            return res.status(200).send();

        var url = 'http://quotes.stormconsultancy.co.uk/random.json';

        request(url, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                //var err = ExceptionHandler.requestJsException(response);
                //return res.status(err.statusCode).send(err);
            }

            var json = JSON.parse(response.body);

            var quote = {
                quote: json.quote,
                author: json.author
            };

            return res.status(200).send(quote);
        });
    });
};

module.exports = MiscApis;