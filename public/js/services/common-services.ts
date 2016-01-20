///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    export interface ICommonServices {
    }

    class CommonServices implements ICommonServices {

        static $inject = ['$q'];

        constructor(private $q:ng.IQService) {

        }
    }

    angular.module('app.services')
        .service('CommonServices', CommonServices);
}