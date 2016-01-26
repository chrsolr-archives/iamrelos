///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    export interface ICommonServices {
        getBlog(max?: number): ng.IPromise<any>;
        getBlogDetails(permalink: string): ng.IPromise<any>;
        getWord(): ng.IPromise<any>;
    }

    class CommonServices implements ICommonServices {

        static $inject = ['$q'];

        constructor(private $q:ng.IQService) {}

        getBlog(max?: number): ng.IPromise<any> {
            var queryLimit = max || 50;
            var q = this.$q.defer();

            var Blog = Parse.Object.extend("Blog");
            var query = new Parse.Query(Blog);

            query.descending('createdAt');
            query.equalTo("isActive", true);
            query.limit(queryLimit);

            query.find({
                success: function(results) {
                    var data = [];

                    angular.forEach(results, (value, key) => {
                        data.push(value.toJSON());
                    });

                    q.resolve(data);
                },
                error: function(error) {
                    q.reject(error);
                }
            });

            return q.promise;
        }

        getBlogDetails(permalink: string): ng.IPromise<any> {
            var q = this.$q.defer();

            var Blog = Parse.Object.extend("Blog");
            var query = new Parse.Query(Blog);

            query.equalTo("isActive", true);
            query.equalTo("permalink", permalink);

            query.first({
                success: function(result) {
                    q.resolve(result.toJSON());
                },
                error: function(error) {
                    q.reject(error);
                }
            });

            return q.promise;
        }
        
        getWord(): ng.IPromise<any> {
            var q = this.$q.defer();

            var Word = Parse.Object.extend("Word");
            var query = new Parse.Query(Word);

            query.descending('createdAt');
            query.equalTo("isActive", true);
            query.limit(1);
            
            query.first({
                success: function(result) {
                    q.resolve(result.toJSON());
                },
                error: function(error) {
                    q.reject(error);
                }
            });

            return q.promise;
        }
    }

    angular.module('app.services')
        .service('CommonServices', CommonServices);
}