///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
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

            CommonServices.prototype.getWord = function () {
                var q = this.$q.defer();

                var Word = Parse.Object.extend("Word");
                var query = new Parse.Query(Word);

                query.descending('createdAt');
                query.limit(1);

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

        angular.module('app.services').service('CommonServices', CommonServices);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
