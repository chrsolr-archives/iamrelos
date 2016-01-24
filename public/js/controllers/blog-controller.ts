///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {

    interface IBlogController {
        blog: any[];
    }

    class BlogController implements IBlogController {
        blog: any[];

        static $inject = ['initData'];

        constructor(private initData) {
            var _this = this;
            _this.blog = initData.data;
        }
    }

    angular.module('app.controllers')
        .controller('BlogController', BlogController);
}