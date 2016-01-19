///<reference path="../../../typings/tsd.d.ts" />

((): void => {
    'use strict';

    angular.module('app').run(run);

    run.$inject = ['$rootScope'];

    function run($rootScope: ng.IRootScopeService): void {

        $rootScope.$on('$routeChangeStart', (event, next, current): void => {

        });
    }
})();