///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    export interface ICommonServices {
    }

    class CommonServices implements ICommonServices { 
        constructor() {
            
        }
    }

    angular.module('app.services')
    .factory('CommonServices', [, () => new CommonServices()]);
}