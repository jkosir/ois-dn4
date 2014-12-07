'use strict';

/**
 * @ngdoc function
 * @name oisdn4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oisdn4App
 */
angular.module('oisdn4App')
  .controller('MainCtrl', function ($scope, ehrApi) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log(ehrApi);
  });
