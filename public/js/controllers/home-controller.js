///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    (function (controllers) {
        var HomeController = (function () {
            function HomeController() {
                var _this = this;
            }
            HomeController.$inject = [];
            return HomeController;
        })();

        angular.module('app.controllers').controller('HomeController', HomeController);
    })(app.controllers || (app.controllers = {}));
    var controllers = app.controllers;
})(app || (app = {}));
