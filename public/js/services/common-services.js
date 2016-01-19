///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    (function (services) {
        'use strict';

        var CommonServices = (function () {
            function CommonServices() {
            }
            return CommonServices;
        })();

        angular.module('app.services').factory('CommonServices', [, function () {
                return new CommonServices();
            }]);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
