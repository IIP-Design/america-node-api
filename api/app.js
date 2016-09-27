'use strict';

const path 			= require('path');
const express 		= require('express');
const bodyParser 	= require('body-parser');
const morgan 		= require('morgan');

const routes 		= require('./routes');

let app = express();

// Configure middleware
// Don't show the log when it is test
if( process.env.NODE_ENV !== 'test' ) {
    app.use( morgan('combined') ); 
}

app.use( bodyParser.urlencoded({ extended: false }) );
app.disable( 'x-powered-by' );

app.get( '/', ( req, res, next ) => {
	res.set({
    	'X-So-Say-We-All': 'true'
  	});
	next();
});

// Mount application routes 
// Prefix all routes with 'api' and version number
app.use( '/api/v1/', routes );

// Export Express webapp instance
module.exports = app;