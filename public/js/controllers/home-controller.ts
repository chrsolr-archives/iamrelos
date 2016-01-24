///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {

    interface IHomeController {
        startAnimation(): void;
    }

    class HomeController implements IHomeController {

        static $inject = [];

        constructor() {
            var _this = this;
            _this.startAnimation();
        }

        startAnimation(): void {
            angular.element(document.querySelector('.title')).addClass('animated fadeInDown');
            angular.element(document.querySelector('.subtitle')).addClass('animated fadeInUp');
            angular.element(document.querySelector('.social-media-wrapper')).addClass('animated fadeInUp');
        }
    }

    angular.module('app.controllers')
        .controller('HomeController', HomeController);
}