'use strict';

angular.module('ngTurtle')
  .factory('User', function ($resource, $http) {


    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      updateRole: {
        method: 'PUT',
        params: {
          controller: 'update'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });

  })

  .factory('Roles', function ($http) {

    var getRoles = function () {
      return $http.get('/roles');
    };
    return {
      getRoles: getRoles
    };
  });
