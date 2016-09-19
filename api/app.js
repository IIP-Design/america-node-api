'use strict';

const path 			= require('path');
const express 		= require('express');
const bodyParser 	= require('body-parser');
const morgan 		= require('morgan');

const routes 		= require('./routes');

let app = express();

// Configure middleware
app.use( morgan('combined') )
app.use( bodyParser.urlencoded({ extended: false }) );
app.disable( 'x-powered-by' );

app.get( '/', (req, res, next ) => {
	res.set({
    	'X-So-Say-We-All': 'true'
  	});
	next();
});

// Mount application routes
app.use( '/', routes );

// Export Express webapp instance
module.exports = app;
