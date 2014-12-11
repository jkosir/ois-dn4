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
      ehrId: '05cbb914-ee0e-478d-ab27-710468db0237',
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
      ehrId: 'dac9e219-e10a-42a4-9479-b2ec1f4da00d',
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
      ehrId: '57aeca58-1e72-4237-9619-f36686176a0d',
      meritve: {
        temperature: [36.7, 36.9, 37.1, 36.8, 37.4],
        systolicBP: [141, 135, 147, 150, 142],
        diastolicBP: [79, 89, 91, 92, 87],
        height: [182, 181, 183, 185, 184],
        weight: [71.3, 72.4, 71.9, 73.0, 73.2]
      }
    }
  ]);
