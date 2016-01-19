///<reference path="../../../typings/tsd.d.ts" />
(function () {
    'use strict';

    angular.module('app.services', []);
    angular.module('app.controllers', []);
    angular.module('app.filters', []);
    angular.module('app.directives', []);

    var modules = ['app.services', 'app.controllers', 'app.filters', 'app.directives', 'ngRoute', 'ui.bootstrap', 'angular-loading-bar'];

    angular.module('app', modules);
})();
