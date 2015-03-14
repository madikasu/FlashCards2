(function () {
    'use strict';

    angular.module('game', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
        .config(Configuration)
        .controller('MainController', MainController);

    Configuration.$inject = ['$locationProvider', '$routeProvider'];

    function Configuration($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when("/", {
                templateUrl: './partials/partial1.html',
                controller: 'GameController',
                controllerAs: 'game'
            })
            .otherwise({
                redirectTo: '/'
            });
    }


    MainController.$inject = ['$scope'];

    function MainController($scope) {
        $scope.test = "Testing...";
    }

}());