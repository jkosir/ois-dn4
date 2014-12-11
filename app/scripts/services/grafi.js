'use strict';

/**
 * @ngdoc service
 * @name oisdn4App.grafi
 * @description
 * # grafi
 * Constant in the oisdn4App.
 */
angular.module('oisdn4App')
  .constant('grafi', {
    pritisk: {
      options: {
        chart: {
          type: 'bar'
        },
        tooltip: {
          style: {
            padding: 10,
            fontWeight: 'bold'
          }
        }
      },
      series: [{
        data: [10, 15, 12, 8, 7]
      }],
      title: {
        text: 'Hello'
      }
    }
  });
