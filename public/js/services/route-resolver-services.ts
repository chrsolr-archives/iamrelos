///<reference path="../../../typings/tsd.d.ts" />
///<reference path="common-services.ts"/>

module app.services {
    'use strict';

    export interface IRouteResolverServices {
        resolveBlog(max?: number): ng.IPromise<any>;
        resolveBlogDetails(permalink: string): ng.IPromise<any>;
    }

    class RouteResolverServices implements IRouteResolverServices {

        static $inject = ['$q', 'CommonServices'];

        constructor(private $q: ng.IQService, private CommonServices: ICommonServices){ }

        resolveBlog(max?: number): ng.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getBlog(max)
            ]).then((results: any[]): any => {
                return {
                    data: results[0]
                }
            });
        }

        resolveBlogDetails(permalink: string): ng.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getBlogDetails(permalink)
            ]).then((results: any[]): any => {
                return {
                    data: results[0]
                }
            });
        }
        
        resolveHomeWord(): ng.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getWord()
            ]).then((results: any[]): any => {
                return {
                    data: results[0]
                }
            });
        }
    }

    angular.module('app.services')
        .service('RouteResolverServices', RouteResolverServices);
}