///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var CommonServices = (function () {
            function CommonServices($q) {
                this.$q = $q;
            }
            CommonServices.prototype.getBlog = function (max) {
                var queryLimit = max || 50;
                var q = this.$q.defer();
                var Blog = Parse.Object.extend("Blog");
                var query = new Parse.Query(Blog);
                query.descending('createdAt');
                query.equalTo("isActive", true);
                query.limit(queryLimit);
                query.find({
                    success: function (results) {
                        var data = [];
                        angular.forEach(results, function (value, key) {
                            data.push(value.toJSON());
                        });
                        q.resolve(data);
                    },
                    error: function (error) {
                        q.reject(error);
                    }
                });
                return q.promise;
            };
            CommonServices.prototype.getBlogDetails = function (permalink) {
                var q = this.$q.defer();
                var Blog = Parse.Object.extend("Blog");
                var query = new Parse.Query(Blog);
                query.equalTo("isActive", true);
                query.equalTo("permalink", permalink);
                query.first({
                    success: function (result) {
                        q.resolve(result.toJSON());
                    },
                    error: function (error) {
                        q.reject(error);
                    }
                });
                return q.promise;
            };
            CommonServices.$inject = ['$q'];
            return CommonServices;
        })();
        angular.module('app.services')
            .service('CommonServices', CommonServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=common-services.js.map