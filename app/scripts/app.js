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
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'highcharts-ng',
    'geolocation',
    'ngDialog',
    'uiGmapgoogle-maps'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  }).config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      v: '3.17'
    });
  })
  .run(function ($rootScope, ehrApi, users, geolocation) {
    $rootScope.uporabniki = users;
    $rootScope.uporabnikId = 0;

    $rootScope.$on('ngDialog.opened', function () {
      geolocation.getLocation().then(function (data) {
        $rootScope.lokacija = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        };
      });
    });
  });
