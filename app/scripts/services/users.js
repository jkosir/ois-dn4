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
      datumRojstva: '1955-10-28T00:00'
    },
    {
      ime: 'Mojmir',
      priimek: 'Vekoslav',
      datumRojstva: '1986-11-21T00:00'
    },
    {
      ime: 'Bogomil',
      priimek: 'Borka',
      datumRojstva: '1994-12-10T00:00'
    }
  ]);
