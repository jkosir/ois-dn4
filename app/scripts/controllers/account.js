'use strict';

/**
 * @ngdoc function
 * @name oisdn4App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oisdn4App
 */
angular.module('oisdn4App')
  .controller('AccountCtrl', function ($scope, grafi, users, $stateParams, ehrApi, $filter, StravaApi) {
    $scope.uporabnik = users[$stateParams.id];
    $scope.grafi = angular.copy(grafi);
    $scope.maxPritisk = 0;

    ehrApi.getBP($scope.uporabnik).then(function (response) {
      angular.forEach(response.data.reverse(), function (meritev) {
        $scope.maxPritisk = Math.max($scope.maxPritisk, meritev.systolic);
        $scope.grafi.tlak.series[0].data.push({
          datum: $filter('date')(meritev.time, 'dd. MM. yyyy'),
          x: meritev.diastolic,
          y: meritev.systolic
        });
      });
    });

    StravaApi.me.promise.then(function (data) {
      $scope.me = data;
    });

  });
