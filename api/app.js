'use strict';

const path 			= require('path');
const express 		= require('express');
const bodyParser 	= require('body-parser');
const morgan 		= require('morgan');
//const routes 		= require('./controllers/routes');

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

app.get('/', function ( req, res ) {
  res.status( 200 ).send( 'ok' );
});

// Static file serving happens everywhere but in production
if ( process.env.NODE_ENV !== 'production' ) {
  let staticPath = path.join(__dirname, '..', '..', 'public');
  app.use('/static', express.static( staticPath) );
}

// Mount application routes
//routes( app );

// Export Express webapp instance
module.exports = app;
