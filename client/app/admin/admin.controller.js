'use strict';

angular.module('ngTurtle')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, Roles) {
    Roles.getRoles().success(function (roles) {
      $scope.roles = roles;
    });

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.currentUser = Auth.getCurrentUser();

    $scope.changeRole = function (user) {

      User.updateRole(user);

    };

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
