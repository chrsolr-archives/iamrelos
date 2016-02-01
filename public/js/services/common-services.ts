///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    import IPromise = Parse.IPromise;

    export interface ICommonServices {
        getBlog(max?:number, permalink?:string): IPromise<any>;
        getRandomWord(): IPromise<any>;
    }

    class CommonServices implements ICommonServices {
        blogs: any[];
        
        static $inject = ['$http', '$q'];

        constructor(private $http:ng.IHttpService, private $q:ng.IQService) {
            this.blogs = [];
        }

        getBlog(max?:number, permalink?:string):IPromise<any> {
            var _this = this;
            var limit = max || 10;
            var q = _this.$q.defer();
            
            if (_this.blogs.length === 0){
                this.http.get('/api/blogs?limit=' + limit + '&permalink=' + permalink).success((data: any[]) => {
                    _this.blogs = data;
                    q.resolve(_this.blogs);
                });
                
                return q.promise;
            }
            
            q.resolve(_this.blogs);
            
            return q.promise;
        }

        getRandomWord():IPromise<any> {
            return Parse.Cloud.run('getRandomWord');
        }

    }

    angular.module('app.services')
        .service('CommonServices', CommonServices);
}