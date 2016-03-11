(function () {
    'use strict';
    angular.module('app.services', []);
    angular.module('app.controllers', []);
    angular.module('app.filters', []);
    angular.module('app.directives', []);
    var modules = ['app.services', 'app.controllers', 'app.filters', 'app.directives', 'ngRoute', 'angular-loading-bar', 'typer'];
    angular.module('app', modules);
})();
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var CommonServices = (function () {
            function CommonServices($http, $q) {
                this.$http = $http;
                this.$q = $q;
                this.blogs = [];
            }
            CommonServices.prototype.getBlog = function (max, permalink) {
                var _this = this;
                var limit = max || 10;
                var q = _this.$q.defer();
                if (_this.blogs.length === 0) {
                    _this.$http.get('/api/blogs?limit=' + limit + '&permalink=' + permalink)
                        .then(function (res) {
                        _this.blogs = res.data;
                        q.resolve(_this.blogs);
                    });
                    return q.promise;
                }
                q.resolve(_this.blogs);
                return q.promise;
            };
            CommonServices.prototype.getRandomWord = function () {
                var _this = this;
                var q = _this.$q.defer();
                _this.$http.get('/api/quotes').then(function (res) { q.resolve(res.data); });
                return q.promise;
            };
            CommonServices.$inject = ['$http', '$q'];
            return CommonServices;
        }());
        angular.module('app.services')
            .service('CommonServices', CommonServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var services;
    (function (services) {
        var NavigationServices = (function () {
            function NavigationServices($rootScope) {
                this.$rootScope = $rootScope;
                this.isSideBarOpen = false;
            }
            NavigationServices.prototype.toggleSideBar = function () {
                this.isSideBarOpen = !this.isSideBarOpen;
                this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
            };
            NavigationServices.prototype.getSideBarState = function () {
                return this.isSideBarOpen;
            };
            NavigationServices.prototype.closeSideBar = function () {
                this.isSideBarOpen = false;
                this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
            };
            NavigationServices.prototype.openSideBar = function () {
                this.isSideBarOpen = true;
                this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
            };
            NavigationServices.$inject = ['$rootScope'];
            return NavigationServices;
        }());
        angular.module('app.services')
            .service('NavigationServices', NavigationServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var RouteResolverServices = (function () {
            function RouteResolverServices($q, CommonServices) {
                this.$q = $q;
                this.CommonServices = CommonServices;
            }
            RouteResolverServices.prototype.resolveBlog = function (max) {
                return this.$q.all([
                    this.CommonServices.getBlog(max)
                ]).then(function (results) { return { data: results[0] }; });
            };
            RouteResolverServices.prototype.resolveBlogDetails = function (permalink) {
                return this.$q.all([
                    this.CommonServices.getBlog(1, permalink)
                ]).then(function (results) { return { data: results[0][0] }; });
            };
            RouteResolverServices.prototype.resolveRandomQuote = function () {
                return this.$q.all([
                    this.CommonServices.getRandomWord()
                ]).then(function (results) { return { data: results[0] }; });
            };
            RouteResolverServices.$inject = ['$q', 'CommonServices'];
            return RouteResolverServices;
        }());
        angular.module('app.services')
            .service('RouteResolverServices', RouteResolverServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
(function () {
    'use strict';
    angular.module('app').config(config);
    config.$inject = ['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider'];
    function config($routeProvider, $locationProvider, cfpLoadingBarProvider) {
        $routeProvider.when('/', {
            templateUrl: '/partials/home.html',
            caseInsensitiveMatch: true,
            controller: 'HomeController',
            controllerAs: 'vm',
            resolve: {
                initData: ['RouteResolverServices', function (RouteResolverServices) {
                        return RouteResolverServices.resolveRandomQuote();
                    }]
            }
        }).when('/blog', {
            templateUrl: '/partials/blog.html',
            caseInsensitiveMatch: true,
            controller: 'BlogController',
            controllerAs: 'vm',
            resolve: {
                initData: ['RouteResolverServices', function (RouteResolverServices) {
                        return RouteResolverServices.resolveBlog();
                    }]
            }
        }).when('/blog/:permalink', {
            templateUrl: '/partials/blog-details.html',
            caseInsensitiveMatch: true,
            controller: 'BlogDetailsController',
            controllerAs: 'vm',
            resolve: {
                initData: ['$route', 'RouteResolverServices', function ($route, RouteResolverServices) {
                        return RouteResolverServices.resolveBlogDetails($route.current.params.permalink);
                    }]
            }
        }).otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
        cfpLoadingBarProvider.includeSpinner = false;
    }
})();
(function () {
    'use strict';
    angular.module('app').run(run);
    run.$inject = ['$rootScope', 'NavigationServices'];
    function run($rootScope, NavigationServices) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (NavigationServices.getSideBarState()) {
                NavigationServices.closeSideBar();
            }
        });
    }
})();
var app;
(function (app) {
    var directives;
    (function (directives) {
        'use strict';
        var NavigationBarDirective = (function () {
            function NavigationBarDirective($scope, NavigationServices) {
                this.$scope = $scope;
                this.NavigationServices = NavigationServices;
                var _this = this;
                _this.isSideBarOpen = _this.NavigationServices.getSideBarState();
                $scope.$on('navigation:sidebar', function (event, data) {
                    _this.isSideBarOpen = data;
                });
            }
            NavigationBarDirective.prototype.toggleMenu = function () {
                this.NavigationServices.toggleSideBar();
            };
            NavigationBarDirective.$inject = ['$scope', 'NavigationServices'];
            return NavigationBarDirective;
        }());
        directives.NavigationBarDirective = NavigationBarDirective;
        angular.module('app.directives').directive('navigationBar', function () {
            return {
                scope: true,
                restrict: 'E',
                templateUrl: '/js/directives/navbar/navigation-bar-directive.html',
                controller: NavigationBarDirective,
                controllerAs: 'vm',
                transclude: true
            };
        });
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var BlogController = (function () {
            function BlogController(initData) {
                this.initData = initData;
                var _this = this;
                _this.blog = initData.data;
            }
            BlogController.$inject = ['initData'];
            return BlogController;
        }());
        angular.module('app.controllers')
            .controller('BlogController', BlogController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var BlogDetailsController = (function () {
            function BlogDetailsController(initData, $sce) {
                this.initData = initData;
                this.$sce = $sce;
                var _this = this;
                _this.blog = initData.data;
            }
            BlogDetailsController.prototype.sanitizeHTML = function (html) {
                return this.$sce.trustAsHtml(html);
            };
            BlogDetailsController.$inject = ['initData', '$sce', 'CommonServices'];
            return BlogDetailsController;
        }());
        angular.module('app.controllers')
            .controller('BlogDetailsController', BlogDetailsController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var HomeController = (function () {
            function HomeController(initData) {
                var _this = this;
                _this.quote = initData.data;
                _this.startAnimation();
            }
            HomeController.prototype.startAnimation = function () {
                angular.element(document.querySelector('.title')).addClass('animated fadeInDown');
                angular.element(document.querySelector('.subtitle')).addClass('animated fadeInUp');
                angular.element(document.querySelector('.social-media-wrapper')).addClass('animated fadeInUp');
            };
            HomeController.$inject = ['initData'];
            return HomeController;
        }());
        angular.module('app.controllers')
            .controller('HomeController', HomeController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
