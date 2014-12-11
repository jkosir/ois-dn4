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
      .state('account', {
        url: '/:id/account',
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      });
  }).config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      v: '3.17'
    });
  })
  .run(function ($rootScope, users, geolocation, ehrApi, $state) {
    $rootScope.uporabniki = users;
    $rootScope.$state = $state;
    //ehrApi.generateTestData();

    $rootScope.$on('ngDialog.opened', function () {
      geolocation.getLocation().then(function (data) {
        $rootScope.lokacija = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        };
      });
    });
  });
