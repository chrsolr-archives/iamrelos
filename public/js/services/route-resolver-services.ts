///<reference path="../../../typings/tsd.d.ts" />
///<reference path="common-services.ts"/>

module app.services {
    'use strict';

    export interface IRouteResolverServices {
        resolveBlog(max?: number): Parse.IPromise<any>;
        resolveBlogDetails(permalink: string): Parse.IPromise<any>;
        resolveHomeWord(): Parse.IPromise<any>;
    }

    class RouteResolverServices implements IRouteResolverServices {

        static $inject = ['$q', 'CommonServices'];

        constructor(private $q: ng.IQService, private CommonServices: ICommonServices){ }

        resolveBlog(max?: number): Parse.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getBlog(max)
            ]).then((results: any[]): any => {
                return {
                    data: results[0]
                }
            });
        }

        resolveBlogDetails(permalink: string): Parse.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getBlog(1, permalink)
            ]).then((results: any[]): any => {
                return {
                    data: results[0][0]
                }
            });
        }
        
        resolveHomeWord(): Parse.IPromise<any> {
            return this.$q.all([
                this.CommonServices.getRandomWord()
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