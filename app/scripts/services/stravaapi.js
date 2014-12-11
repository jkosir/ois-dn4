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

    this.qAPI.promise.then(function (result) {
      result.me().then(function (response) {
        me.resolve(response);
      });
    });

    this.doAuth = function () {
      OAuth.popup('strava');
    };
  });
