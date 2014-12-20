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
    'uiGmapgoogle-maps',
    'oauth.io'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
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
  }).config(function (OAuthProvider) {
    OAuthProvider.setPublicKey('Zcy9H_R3eAhBKyDr1sO_db3wLcA');
    OAuthProvider.setHandler('strava', ['OAuthData', 'StravaApi', function (OAuthData, StravaApi) { // ng-annotate doesn't this one up
      StravaApi.qAPI.resolve(OAuthData.result);
    }]);
  })
  .run(function ($rootScope, users, geolocation, ehrApi, $state, StravaApi) {
    angular.extend($rootScope, {
      uporabniki: users,
      $state: $state,
      strava: StravaApi
    });

    $rootScope.generateUsers = function(){
      $rootScope.loading = true;
      ehrApi.generateUsers().then(function(){
        $rootScope.loading = false;
        $state.reload();  // Reload page
      });
    };

    $rootScope.$on('ngDialog.opened', function () {
      geolocation.getLocation().then(function (data) {
        $rootScope.lokacija = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        };
      });
    });
  });
