///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {
    'use strict';

    class BlogController {
        blog: any[];
        searchTerm: string;

        static $inject = ['initData'];

        constructor(private initData) {
            var _this = this;
            _this.blog = initData.data;

        }
    }

    angular.module('app.controllers')
        .controller('BlogController', BlogController);
}