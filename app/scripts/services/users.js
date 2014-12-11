'use strict';

/**
 * @ngdoc service
 * @name oisdn4App.users
 * @description
 * # users
 * Constant in the oisdn4App.
 */
angular.module('oisdn4App')
  .constant('users', [
    {
      ime: 'Ferdo',
      priimek: 'Sidonija',
      slika: 'images/franklin.png',
      datumRojstva: '1955-10-28T00:00',
      ehrId: '2a3148d9-5801-48cf-bc76-fa0fc6e8ae9c',
      meritve: {
        temperature: [36.8, 37.0, 36.5, 38.2, 37.3],
        systolicBP: [106, 117, 115, 102, 119],
        diastolicBP: [65, 61, 68, 71, 69],
        height: [185, 186, 186, 185, 186],
        weight: [77.5, 78.3, 79.0, 80.0, 83.2]
      }
    },
    {
      ime: 'Mojmir',
      priimek: 'Vekoslav',
      slika: 'images/obama.png',
      datumRojstva: '1986-11-21T00:00',
      ehrId: 'cdd64978-016c-4ec2-9a87-3c35be22e46f',
      meritve: {
        temperature: [37.2, 37.5, 37.0, 36.8, 36.9],
        systolicBP: [129, 135, 139, 130, 132],
        diastolicBP: [75, 90, 78, 89, 85],
        height: [177, 176, 178, 177, 175],
        weight: [64.0, 65.7, 65.1, 66.2, 65.9]
      }
    },
    {
      ime: 'Bogomil',
      priimek: 'Borka',
      slika: 'images/lincoln.png',
      datumRojstva: '1994-12-10T00:00',
      ehrId: '1fd6482f-955f-4f8d-b0a9-b3086f7bdb58',
      meritve: {
        temperature: [36.7, 36.9, 37.1, 36.8, 37.4],
        systolicBP: [141, 135, 147, 150, 142],
        diastolicBP: [79, 89, 91, 92, 87],
        height: [182, 181, 183, 185, 184],
        weight: [71.3, 72.4, 71.9, 73.0, 73.2]
      }
    }
  ]);
