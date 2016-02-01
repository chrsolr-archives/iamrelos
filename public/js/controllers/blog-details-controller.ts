///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {
    'use strict';

    class BlogDetailsController {
        blog: any;

        static $inject = ['initData', '$sce', 'CommonServices'];

        constructor(private initData, private $sce: ng.ISCEService) {
            var _this = this;
            _this.blog = initData.data;
        }

        sanitizeHTML(html: string): string {
            return this.$sce.trustAsHtml(html);
        }
    }

    angular.module('app.controllers')
        .controller('BlogDetailsController', BlogDetailsController);
}