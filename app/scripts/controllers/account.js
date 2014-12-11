'use strict';

/**
 * @ngdoc function
 * @name oisdn4App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oisdn4App
 */
angular.module('oisdn4App')
  .controller('AccountCtrl', function ($scope, grafi, users, $stateParams, ehrApi) {
    $scope.uporabnik = users[$stateParams.id];
    $scope.grafi = angular.copy(grafi);
    ehrApi.getBP($scope.uporabnik).then(function(response){
      angular.forEach(response.data.reverse(), function(meritev){
        $scope.grafi.pritisk.series[0].data.push([new Date(meritev.time).getTime(), meritev.systolic]);
      });
    });
  });
