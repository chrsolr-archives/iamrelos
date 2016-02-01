var mongoose = require('mongoose');

var Quote = new mongoose.Schema({
    quote: {type: String, required: true},
    author: {type: String, required: true, index: {unique: true}}
});

Quote.methods.getRandom = function() {

};

module.exports = mongoose.model('quotes', Quote);