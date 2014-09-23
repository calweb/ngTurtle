"use strict";
angular.module('ngTurtle')
    .factory('GithubSvc', function ($http, $rootScope) {
       var getRepo = function () {
           return $http.get('/api/githubs');
       };

       var createIssue = function (issue) {
           $http.post('/api/githubs/issue', issue).then(function (res) {
               console.log("issue created");
           });
       };

        return {
            getRepo: getRepo,
            createIssue: createIssue
        };
    });