///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    (function (controllers) {
        'use strict';

        var BlogController = (function () {
            function BlogController(initData) {
                this.initData = initData;
                var _this = this;
                _this.blog = initData.data;
            }
            BlogController.$inject = ['initData'];
            return BlogController;
        })();

        angular.module('app.controllers').controller('BlogController', BlogController);
    })(app.controllers || (app.controllers = {}));
    var controllers = app.controllers;
})(app || (app = {}));
