///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {

    interface IHomeController {
        word: any;
        startAnimation(): void;
    }

    class HomeController implements IHomeController {

        static $inject = ['initData'];

        constructor(initData: any) {
            var _this = this;
            _this.word = initData.data;
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