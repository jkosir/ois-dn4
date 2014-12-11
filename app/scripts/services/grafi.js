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
          type: 'line'
        },
        tooltip: {
          style: {
            padding: 10,
            fontWeight: 'bold'
          }
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: null,
          plotBands: [
            {
              color: '#d9edf7',
              from: 70,
              to: 90
            },
            {
              color: '#dff0d8',
              from: 90,
              to: 120
            },
            {
              color: '#fcf8e3',
              from: 120,
              to: 140
            },
            {
              color: '#f2dede',
              from: 140,
              to: 190
            }
          ],
          min: 70,
          max: 190,
          tickInterval: 10
        }
      },
      series: [
        {
          name: 'Sistolični krvni tlak',
          data: [],
          color: '#333'
        }
      ],
      title: {
        text: null
      }
    }
  });
