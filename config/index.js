'use strict';

// Application configuration - environment settings here are the same across
// all environments. 
let config = {};

// ---------------------------------------------------------------
// Config values common across environments (overridable defaults)
// ---------------------------------------------------------------

// HTTP port for Express
config.port = process.env.PORT || 3000;

// Set environment
config.environment = process.env.NODE_ENV || 'development';

// Set database
config.db = require('../db');

// ----------------------------------------------------
// Assign values based on current execution environment
// ----------------------------------------------------
let environment = {};

switch ( process.env.NODE_ENV ) {
  case 'production': 
    environment = require( './production' ); 
    break;
  case 'test': 
    environment = require( './test' ); 
    break;
  default: 
    environment = require( './development' ); 
    break;
}

config = Object.assign( config, environment );

// Export final configuration object
module.exports = config;