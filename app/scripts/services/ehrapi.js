'use strict';

/**
 * @ngdoc service
 * @name oisdn4App.ehrApi
 * @description
 * # ehrApi
 * Service in the oisdn4App.
 */
angular.module('oisdn4App')
  .service('ehrApi', function ($http, $q) {
    var baseUrl = 'https://rest.ehrscape.com/rest/v1';
    var qId = $q.defer();

    $http({
      url: baseUrl + '/session',
      method: 'POST',
      params: {username: 'ois.seminar', password: 'ois4fri'}
    }).success(function (data) {
      qId.resolve(data.sessionId);
    });

    qId.promise.then(function (sessionId) {
      console.log(sessionId);
    });
  });
