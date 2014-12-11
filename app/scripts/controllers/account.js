'use strict';

/**
 * @ngdoc function
 * @name oisdn4App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oisdn4App
 */
angular.module('oisdn4App')
  .controller('AccountCtrl', function ($scope, grafi, users, $stateParams) {
    $scope.uporabnik = users[$stateParams.id];
    $scope.grafi = grafi;
  });
