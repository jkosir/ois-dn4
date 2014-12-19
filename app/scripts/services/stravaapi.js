'use strict';

/**
 * @ngdoc service
 * @name oisdn4App.Stravaapi
 * @description
 * # Stravaapi
 * Service in the oisdn4App.
 */
angular.module('oisdn4App')
  .service('StravaApi', function ($q, $http, OAuth) {
    this.qAPI = $q.defer();
    var me = $q.defer();
    this.me = me;

    this.qAPI.promise.then(function (strava) {
      strava.me().then(function (response) {
        strava.get('/v3/athletes/3292438/koms').then(function (koms) {
          me.resolve({me: response, koms: koms});
        });
      });
    });

    this.doAuth = function () {
      OAuth.popup('strava');
    };
  });
