'use strict';

angular.module('ngTurtle')
  .controller('GithubCtrl', function ($scope, GithubSvc) {

        GithubSvc.getRepo().then(function (repo) {
            $scope.githubRepo = repo;
        });
    $scope.createIssue = function (issue) {
        GithubSvc.createIssue(issue);
        $scope.newIssue = {};
    };
  });
