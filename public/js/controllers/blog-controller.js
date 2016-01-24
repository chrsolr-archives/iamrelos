///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var BlogController = (function () {
            function BlogController(initData) {
                this.initData = initData;
                var _this = this;
                _this.blog = initData.data;
            }
            BlogController.$inject = ['initData'];
            return BlogController;
        })();
        angular.module('app.controllers')
            .controller('BlogController', BlogController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=blog-controller.js.map