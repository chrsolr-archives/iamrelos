var mongoose = require('mongoose');

var Blog = mongoose.Schema({
    imageUrl: String,
    title: String,
    permalink: String,
    isActive: {type: Boolean, default: false},
    author: String,
    tags: Array,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    preview: String,
    content: String,
    comments: [{author: String, content: String, createdAt: Date}]
});

Blog.methods.toVM = function(){
    return {
        title: this.title,
        author: this.author,
        imageUrl: this.imageUrl,
        permalink: this.permalink,
        preview: this.preview,
        content: this.content,
        tags: this.tags,
        createdAt: this.createdAt,
        updateAt: this.updateAt,
        comments: this.comment
    };
};


module.exports = mongoose.model('blogs', Blog);