'use strict';

/**
 * @ngdoc service
 * @name oisdn4App.ehrApi
 * @description
 * # ehrApi
 * Service in the oisdn4App.
 */
angular.module('oisdn4App')
  .service('ehrApi', function ($http, $q, users) {
    var baseUrl = 'https://rest.ehrscape.com/rest/v1';
    var qId = $q.defer();

    $http({
      url: baseUrl + '/session',
      method: 'POST',
      params: {username: 'ois.seminar', password: 'ois4fri'}
    }).success(function (response) {
      qId.resolve(response.sessionId);
    });

    this.generateTestData = function () {
      qId.promise.then(function (sessionId) {
        $http.defaults.headers.common['Ehr-Session'] = sessionId;

        angular.forEach(users, function (uporabnik) {
          $http({
            url: baseUrl + '/ehr',
            method: 'POST'
          }).success(function (response) {

            uporabnik.ehrId = response.ehrId;
            $http({
              url: baseUrl + '/demographics/party',
              method: 'POST',
              data: {
                firstNames: uporabnik.ime,
                lastNames: uporabnik.priimek,
                dateOfBirth: uporabnik.datumRojstva,
                partyAdditionalInfo: [{key: 'ehrId', value: uporabnik.ehrId}]
              }
            });

          });
        });

      });
    };
  });
