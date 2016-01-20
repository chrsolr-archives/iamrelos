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
            CommonServices.$inject = ['$q'];
            return CommonServices;
        })();
        angular.module('app.services')
            .service('CommonServices', CommonServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=common-services.js.map