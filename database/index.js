'use strict';

const knex = require('knex');
const _ = require('lodash');
const config = require('../config');

const databases = {};

_.forIn(config.database.all, function(value, key){
    databases[key] = knex(value);
});

module.exports = databases;