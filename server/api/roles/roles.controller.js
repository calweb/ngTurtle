'use strict';

var _ = require('lodash');
var config = require('../../config/environment');

// Get list of roless
exports.index = function(req, res) {
    return res.status(200).json({roles: config.userRoles});

};

function handleError(res, err) {
  return res.status(500).send(err);
}
