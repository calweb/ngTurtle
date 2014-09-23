'use strict';

angular.module('ngTurtle')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/github', {
        templateUrl: 'app/github/github.html',
        controller: 'GithubCtrl'
      });
  });
