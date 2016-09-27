'use strict';

let environment = process.env.NODE_ENV || 'development';

// Selects the correct DB config object for the current environment
let knex      = require('knex')(require('../knexfile')[environment]);  
let bookshelf = require('bookshelf')(knex);

// Resolve circular dependencies with relations
// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry
bookshelf.plugin('registry'); 

module.exports = bookshelf;