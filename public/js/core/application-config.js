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
            controllerAs: 'vm',
            resolve: {
                initData: [
                    'RouteResolverServices', function (RouteResolverServices) {
                        return RouteResolverServices.resolveHomeWord();
                    }]
            }
        }).when('/blog', {
            templateUrl: '/partials/blog.html',
            caseInsensitiveMatch: true,
            controller: 'BlogController',
            controllerAs: 'vm',
            resolve: {
                initData: [
                    'RouteResolverServices', function (RouteResolverServices) {
                        return RouteResolverServices.resolveBlog();
                    }]
            }
        }).when('/blog/:permalink', {
            templateUrl: '/partials/blog-details.html',
            caseInsensitiveMatch: true,
            controller: 'BlogDetailsController',
            controllerAs: 'vm',
            resolve: {
                initData: [
                    '$route', 'RouteResolverServices', function ($route, RouteResolverServices) {
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
