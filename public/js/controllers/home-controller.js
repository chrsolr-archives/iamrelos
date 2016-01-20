///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var HomeController = (function () {
            function HomeController() {
                var _this = this;
            }
            HomeController.$inject = [];
            return HomeController;
        })();
        angular.module('app.controllers')
            .controller('HomeController', HomeController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=home-controller.js.map