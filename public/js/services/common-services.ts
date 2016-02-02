///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    export interface ICommonServices {
        getBlog(max?:number, permalink?:string): ng.IPromise<any>;
        getRandomWord(): ng.IPromise<any>;
    }

    class CommonServices implements ICommonServices {
        blogs: any[];
        
        static $inject = ['$http', '$q'];

        constructor(private $http:ng.IHttpService, private $q:ng.IQService) {
            this.blogs = [];
        }

        getBlog(max?:number, permalink?:string):ng.IPromise<any> {
            var _this = this;
            var limit = max || 10;
            var q = _this.$q.defer();
            
            if (_this.blogs.length === 0){
                _this.$http.get('/api/blogs?limit=' + limit + '&permalink=' + permalink)
                .then((res: any[]) => {
                    _this.blogs = res.data;
                    q.resolve(_this.blogs);
                });
                
                return q.promise;
            }
            
            q.resolve(_this.blogs);
            
            return q.promise;
        }

        getRandomWord():ng.IPromise<any> {
            var _this = this;
            var q = _this.$q.defer();
            
            _this.$http.get('/api/quotes').then(res => { q.resolve(res.data); });
            
            return q.promise;
        }

    }

    angular.module('app.services')
        .service('CommonServices', CommonServices);
}