///<reference path="../../../typings/tsd.d.ts" />

import IRouteResolverServices = app.services.IRouteResolverServices;

((): void => {
    'use strict';

    angular.module('app').config(config);
    
    config.$inject = ['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider'];

    function config(
            $routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider, 
            cfpLoadingBarProvider: ng.loadingBar.ILoadingBarProvider): void {
        
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
                initData: ['RouteResolverServices', (RouteResolverServices: IRouteResolverServices): any => {
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