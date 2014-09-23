'use strict';

var express = require('express');
var controller = require('./github.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.getGithub);
router.post('/issue', auth.isAuthenticated(), controller.createIssue);
router.post('/repos/new', auth.isAuthenticated(), controller.createRepo);

module.exports = router;