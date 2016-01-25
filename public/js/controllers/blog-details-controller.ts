///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {

    interface IBlogDetailsController {
        blog: any;
        sanitizeHTML(html: string): string;
    }

    class BlogDetailsController implements IBlogDetailsController {
        blog: any;

        static $inject = ['initData', '$sce'];

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