///<reference path="../../../typings/tsd.d.ts" />
(function () {
    'use strict';
    angular.module('app').config(config);
    config.$inject = ['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider'];
    function config($routeProvider, $locationProvider, cfpLoadingBarProvider) {
        $routeProvider.when('/', {
            templateUrl: '/partials/home.html',
            caseInsensitiveMatch: true,
            controller: 'HomeController',
            controllerAs: 'vm'
        }).when('/blog', {
            templateUrl: '/partials/blog.html',
            caseInsensitiveMatch: true,
            controller: 'BlogController',
            controllerAs: 'vm',
            resolve: {
                initData: ['RouteResolverServices', function (RouteResolverServices) {
                        return RouteResolverServices.resolveBlog();
                    }]
            }
        }).otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
        cfpLoadingBarProvider.includeSpinner = false;
    }
})();
//# sourceMappingURL=application-config.js.map