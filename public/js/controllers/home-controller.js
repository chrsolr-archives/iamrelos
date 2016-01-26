///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    (function (controllers) {
        var HomeController = (function () {
            function HomeController(initData) {
                var _this = this;
                _this.word = initData.data;
                _this.startAnimation();
            }
            HomeController.prototype.startAnimation = function () {
                angular.element(document.querySelector('.title')).addClass('animated fadeInDown');
                angular.element(document.querySelector('.subtitle')).addClass('animated fadeInUp');
                angular.element(document.querySelector('.social-media-wrapper')).addClass('animated fadeInUp');
            };
            HomeController.$inject = ['initData'];
            return HomeController;
        })();

        angular.module('app.controllers').controller('HomeController', HomeController);
    })(app.controllers || (app.controllers = {}));
    var controllers = app.controllers;
})(app || (app = {}));
