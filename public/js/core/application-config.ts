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
            controllerAs: 'vm',
            resolve: {
                initData: ['RouteResolverServices', (RouteResolverServices: IRouteResolverServices): any => {
                    return RouteResolverServices.resolveHomeWord();
                }]
            }
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
        }).when('/blog/:permalink', {
            templateUrl: '/partials/blog-details.html',
            caseInsensitiveMatch: true,
            controller: 'BlogDetailsController',
            controllerAs: 'vm',
            resolve: {
                initData: ['$route', 'RouteResolverServices', ($route: ng.route.IRouteService, RouteResolverServices: IRouteResolverServices): any => {
                    return RouteResolverServices.resolveBlogDetails($route.current.params.permalink);
                }]
            }
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);

        cfpLoadingBarProvider.includeSpinner = false;
    }
})();