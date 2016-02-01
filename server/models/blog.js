var mongoose = require('mongoose');

var Blog = mongoose.Schema({
    
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
        updateAt: this.updateAt
    };
};


module.exports = mongoose.model('blog', Blog);