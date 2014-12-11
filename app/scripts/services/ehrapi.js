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

    function predloga(datetime, height, weight, temperature, systolicBP, diastolicBP) {
      return {
        'ctx/language': 'en',
        'ctx/territory': 'SI',
        'ctx/time': datetime,
        'vital_signs/height_length/any_event/body_height_length': height,
        'vital_signs/body_weight/any_event/body_weight': weight,
        'vital_signs/body_temperature/any_event/temperature|magnitude': temperature,
        'vital_signs/body_temperature/any_event/temperature|unit': '°C',
        'vital_signs/blood_pressure/any_event/systolic': systolicBP,
        'vital_signs/blood_pressure/any_event/diastolic': diastolicBP
        //'vital_signs/indirect_oximetry:0/spo2|numerator': nasicenostKrviSKisikom
      };
    }

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
        var u = users[0];

        $http({
          url: baseUrl + '/composition',
          method: 'POST',
          params: {
            ehrId: u.ehrId,
            templateId: 'Vital Signs',
            format: 'FLAT',
            committer: 'Milka Gorenjka'
          },
          data: predloga(
            '2014-3-19T13:10Z',
            u.meritve.height[0],
            u.meritve.weight[0],
            u.meritve.temperature[0],
            u.meritve.systolicBP[0],
            u.meritve.diastolicBP[0]
          )
        }).success(function(){
          $http({
            url: baseUrl + '/view/' + u.ehrId + '/blood_pressure',
            method: 'GET'
          });
        });
      });
    };


    this.generateUsers = function(){
      angular.forEach(users, function (uporabnik) {
        $http({
          url: baseUrl + '/ehr',
          method: 'POST'
        }).success(function (response) {
          console.log(response.ehrId);

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
    };
  });
