///<reference path="../../../../typings/tsd.d.ts" />
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
            NavigationBarDirective.$inject = ['$scope', 'NavigationServices'];
            return NavigationBarDirective;
        })();
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
//# sourceMappingURL=navigation-bar-directive.js.map