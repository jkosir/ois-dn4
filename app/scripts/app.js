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
    'nvd3',
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
  }).config(function(uiGmapGoogleMapApiProvider){
    uiGmapGoogleMapApiProvider.configure({
      v: '3.17'
    });
  })
  .run(function($rootScope, ehrApi, users, ngDialog){
    $rootScope.uporabniki = users;
    $rootScope.uporabnikId = 0;
    $rootScope.modal = function(){
      ngDialog.open();
    };
    //ehrApi.generateTestData();
  });
