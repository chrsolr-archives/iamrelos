///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var CommonServices = (function () {
            function CommonServices($http, $q) {
                this.$http = $http;
                this.$q = $q;
                this.blogs = [];
            }
            CommonServices.prototype.getBlog = function (max, permalink) {
                var _this = this;
                var limit = max || 10;
                var q = _this.$q.defer();
                if (_this.blogs.length === 0) {
                    _this.$http.get('/api/blogs?limit=' + limit + '&permalink=' + permalink)
                        .then(function (res) {
                        _this.blogs = res.data;
                        q.resolve(_this.blogs);
                    });
                    return q.promise;
                }
                q.resolve(_this.blogs);
                return q.promise;
            };
            CommonServices.prototype.getRandomWord = function () {
                var _this = this;
                var q = _this.$q.defer();
                _this.$http.get('/api/quotes').then(function (res) { q.resolve(res.data); });
                return q.promise;
            };
            CommonServices.$inject = ['$http', '$q'];
            return CommonServices;
        })();
        angular.module('app.services')
            .service('CommonServices', CommonServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=common-services.js.map