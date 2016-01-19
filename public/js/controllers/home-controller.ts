///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {

    interface IHomeController {
    }

    class HomeController implements IHomeController {

        static $inject = [];

        constructor() {
            var _this = this;
        }
    }

    angular.module('app.controllers')
        .controller('HomeController', HomeController);
}