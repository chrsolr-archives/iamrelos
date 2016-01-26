///<reference path="../../../typings/tsd.d.ts" />
///<reference path="common-services.ts"/>
var app;
(function (app) {
    (function (services) {
        'use strict';

        var RouteResolverServices = (function () {
            function RouteResolverServices($q, CommonServices) {
                this.$q = $q;
                this.CommonServices = CommonServices;
            }
            RouteResolverServices.prototype.resolveBlog = function (max) {
                return this.$q.all([
                    this.CommonServices.getBlog(max)
                ]).then(function (results) {
                    return {
                        data: results[0]
                    };
                });
            };

            RouteResolverServices.prototype.resolveBlogDetails = function (permalink) {
                return this.$q.all([
                    this.CommonServices.getBlogDetails(permalink)
                ]).then(function (results) {
                    return {
                        data: results[0]
                    };
                });
            };

            RouteResolverServices.prototype.resolveHomeWord = function () {
                return this.$q.all([
                    this.CommonServices.getWord()
                ]).then(function (results) {
                    return {
                        data: results[0]
                    };
                });
            };
            RouteResolverServices.$inject = ['$q', 'CommonServices'];
            return RouteResolverServices;
        })();

        angular.module('app.services').service('RouteResolverServices', RouteResolverServices);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
