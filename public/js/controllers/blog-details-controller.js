///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var BlogDetailsController = (function () {
            function BlogDetailsController(initData, $sce) {
                this.initData = initData;
                this.$sce = $sce;
                var _this = this;
                _this.blog = initData.data;
            }
            BlogDetailsController.prototype.sanitizeHTML = function (html) {
                return this.$sce.trustAsHtml(html);
            };
            BlogDetailsController.$inject = ['initData', '$sce'];
            return BlogDetailsController;
        })();
        angular.module('app.controllers')
            .controller('BlogDetailsController', BlogDetailsController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=blog-details-controller.js.map