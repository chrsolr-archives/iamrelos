///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    (function (controllers) {
        'use strict';

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
            BlogDetailsController.$inject = ['initData', '$sce', 'CommonServices'];
            return BlogDetailsController;
        })();

        angular.module('app.controllers').controller('BlogDetailsController', BlogDetailsController);
    })(app.controllers || (app.controllers = {}));
    var controllers = app.controllers;
})(app || (app = {}));
