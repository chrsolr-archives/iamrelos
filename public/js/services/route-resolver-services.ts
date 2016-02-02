///<reference path="../../../typings/tsd.d.ts" />
///<reference path="common-services.ts"/>

module app.services {
    'use strict';

    export interface IRouteResolverServices {
        resolveBlog(max?: number): ng.IPromise<any>;
        resolveBlogDetails(permalink: string): ng.IPromise<any>;
        resolveRandomQuote(): ng.IPromise<any>;
    }

    class RouteResolverServices implements IRouteResolverServices {

        static $inject = ['$q', 'CommonServices'];

        constructor(private $q: ng.IQService, private CommonServices: ICommonServices){ }

        resolveBlog(max?: number): ng.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getBlog(max)
            ]).then(results => { return { data: results[0] } });
        }

        resolveBlogDetails(permalink: string): ng.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getBlog(1, permalink)
            ]).then(results => { return { data: results[0][0] } });
        }
        
        resolveRandomQuote(): ng.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getRandomWord()
            ]).then(results => { return { data: results[0] } });
        }
    }

    angular.module('app.services')
        .service('RouteResolverServices', RouteResolverServices);
}