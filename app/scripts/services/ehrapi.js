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
    var aql = function(uporabnik) {
      return 'select ' +
        'a_a/data[at0002]/events[at0003]/data[at0001]/items[at0004, \'Body weight\']/value as Body_weight, ' +
        'a_b/data[at0001]/events[at0002]/data[at0003]/items[at0004, \'Body Height/Length\']/value as Body_Height_Length ' +
        'from EHR[ehr_id/value = \'' + uporabnik.ehrId + '\'] ' +
        'contains COMPOSITION a ' +
        'contains ( OBSERVATION a_a[openEHR-EHR-OBSERVATION.body_weight.v1] and OBSERVATION a_b[openEHR-EHR-OBSERVATION.height.v1]) ' +
        'offset 0 limit 1';
    };

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
      };
    }

    $http({
      url: baseUrl + '/session',
      method: 'POST',
      params: {username: 'ois.seminar', password: 'ois4fri'}
    }).success(function (response) {
      qId.resolve(response.sessionId);
    });

    this.doAQL = function(uporabnik){
      var qResponse = $q.defer();
      qId.promise.then(function (sessionId) {
        $http.defaults.headers.common['Ehr-Session'] = sessionId;
        $http({
          url: baseUrl + '/query',
          params: {aql: aql(uporabnik)},
          method: 'GET'
        }).then(function (response) {
          qResponse.resolve(response);
        });
      });
      return qResponse.promise;
    };

    this.getBP = function (uporabnik) {
      var qResponse = $q.defer();
      qId.promise.then(function (sessionId) {
        $http.defaults.headers.common['Ehr-Session'] = sessionId;
        $http({
          url: baseUrl + '/view/' + uporabnik.ehrId + '/blood_pressure',
          method: 'GET'
        }).then(function (response) {
          qResponse.resolve(response);
        });
      });
      return qResponse.promise;
    };

    function postUserData(uporabnik) {
      var promises = [];
      promises.push($http({
        url: baseUrl + '/demographics/party',
        method: 'POST',
        data: {
          firstNames: uporabnik.ime,
          lastNames: uporabnik.priimek,
          dateOfBirth: uporabnik.datumRojstva,
          partyAdditionalInfo: [{key: 'ehrId', value: uporabnik.ehrId}]
        }
      }));

      var datum = new Date();
      for (var i = 0; i < uporabnik.meritve.height.length; i++) {
        datum.setFullYear(2014 - i);
        promises.push($http({
          url: baseUrl + '/composition',
          method: 'POST',
          params: {
            ehrId: uporabnik.ehrId,
            templateId: 'Vital Signs',
            format: 'FLAT',
            committer: 'Milka Gorenjka'
          },
          data: predloga(
            datum.toISOString(),
            uporabnik.meritve.height[i],
            uporabnik.meritve.weight[i],
            uporabnik.meritve.temperature[i],
            uporabnik.meritve.systolicBP[i],
            uporabnik.meritve.diastolicBP[i]
          )
        }));
      }
      return $q.all(promises);
    }

    this.generateUsers = function () {
      var done = $q.defer();
      var promises = [];
      qId.promise.then(function (sessionId) {
        $http.defaults.headers.common['Ehr-Session'] = sessionId;
        angular.forEach(users, function (uporabnik) {
          promises.push($http({
            url: baseUrl + '/ehr',
            method: 'POST'
          }).success(function (response) {
            uporabnik.ehrId = response.ehrId;
          }));
        });
        $q.all(promises).then(function () {
          angular.forEach(users, function (uporabnik) {
            promises.push(postUserData(uporabnik));
          });
          $q.all(promises).then(function () {
            done.resolve('Done!');
          });
        });
      });
      return done.promise;
    };
  });

