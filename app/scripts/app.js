'use strict';

/**
 * @ngdoc overview
 * @name oisdn4App
 * @description
 * # oisdn4App
 *
 * Main module of the application.
 */
angular
  .module('oisdn4App', [
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
