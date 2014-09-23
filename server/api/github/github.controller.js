'use strict';

var _ = require('lodash');
var Github = require('octonode');
var User = require('../user/user.model');

// repos
exports.getGithub = function(req, res) {
    var token = _.find(req.user.tokens, { kind: 'github'});
    var ghClient = Github.client(token.token);
    var ghRepo = ghClient.repo('calweb/baby-mean');
    ghRepo.info(function (err, data) {
        res.status(200).json({
            title: 'gh api',
            repos: data
        });
    });

};

exports.createRepo = function (req, res) {

    var token = _.find(req.user.tokens, { kind: 'github'});
    var ghClient = Github.client(token.token);
    var ghme = ghClient.me();
    ghme.repo({
        "name": "test repo",
        "description": "yaay!"
    }, function (err, data) {
        if(err) res.send(err);
        res.json({msg: data});
    });

};

// orgs
exports.getOrgs = function (req, res) {
    // stubs
};

exports.createOrg = function (req, res) {
    // stubs
};

// issues
exports.createIssue = function (req, res) {

    var token = _.find(req.user.tokens, { kind: 'github'});

    var ghClient = Github.client(token.token);
    var ghrepo = ghClient.repo('calweb/baby-mean');

    ghrepo.createIssue(req.body, function (err, body, headers) {
        if(err) res.send(err);
        console.log(body);
    }); //issue

};



function handleError(res, err) {
  return res.send(500, err);
}