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
    tlak: {
      options: {
        chart: {
          type: 'scatter',
          zoomType: 'xy'
        },
        plotOptions: {
          scatter: {
            tooltip: {
              headerFormat: '<b>Krvni tlak</b><br>',
              pointFormat: '<b>Sistolični:</b> {point.x} mm Hg<br> <b>Diastolični:</b> {point.y} mm Hg <br> <b>Datum: </b> {point.datum}'
            }
          }
        },
        xAxis: {
          min: 40,
          max: 100,
          title: {
            text: 'Diastolični'
          },
          plotBands: [
            {
              color: '#dff0d8',
              from: 60,
              to: 80,
              zIndex: -19
            },
            {
              color: '#fcf8e3',
              from: 80,
              to: 90,
              zIndex: -17
            },
            {
              color: '#f2dede',
              from: 90,
              to: 100,
              zIndex: -15
            }
          ]
        },
        yAxis: {
          title: {
            text: 'Sistolični'
          },
          min: 70,
          max: 190,
          tickInterval: 10,
          plotBands: [
            {
              color: '#d9edf7',
              from: 70,
              to: 90,
              zIndex: -20
            },
            {
              color: '#dff0d8',
              from: 90,
              to: 120,
              zIndex: -18
            },
            {
              color: '#fcf8e3',
              from: 120,
              to: 140,
              zIndex: -16
            },
            {
              color: '#f2dede',
              from: 140,
              to: 190,
              zIndex: -14
            }
          ]
        }
      },
      series: [
        {
          name: 'Krvni tlak',
          data: [],
          color: '#333'
        }
      ],
      title: {
        text: null
      }
    }
  });
