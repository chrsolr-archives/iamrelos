///<reference path="../../../typings/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app.services', []);
    angular.module('app.controllers', []);
    angular.module('app.filters', []);
    angular.module('app.directives', []);
    var modules = ['app.services', 'app.controllers', 'app.filters', 'app.directives', 'ngRoute', 'angular-loading-bar', 'typer'];
    angular.module('app', modules);
})();
//# sourceMappingURL=application.js.map