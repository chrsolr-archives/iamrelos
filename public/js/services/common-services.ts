///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    import IPromise = Parse.IPromise;

    export interface ICommonServices {
        getBlog(max?:number, permalink?:string): IPromise<any>;
        getRandomWord(): IPromise<any>;
    }

    class CommonServices implements ICommonServices {

        static $inject = [];

        constructor() {
        }

        getBlog(max?:number, permalink?:string):IPromise<any> {
            return Parse.Cloud.run('getBlog', {max: max, permalink: permalink});
        }

        getRandomWord():IPromise<any> {
            return Parse.Cloud.run('getRandomWord');
        }

    }

    angular.module('app.services')
        .service('CommonServices', CommonServices);
}