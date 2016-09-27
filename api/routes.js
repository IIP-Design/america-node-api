'use strict';

const Router = require('express').Router;
const router = new Router();

const courses  = require( './models/courses/courses-router' );
//const lessons  = require('./models/lessons/lessons-router');
//const instructors  = require('./models/instructors/instructors-router');

// Test route to make sure everything is working (GET http://api-america.local:3000/api/v1/
router.route('/').get((req, res) => {
	res.json({ message: 'Welcome to the America API!' });
});

router.use( '/courses', courses );
//router.use( '/lessons', lessons );
//router.use( '/instructors', instructors );

module.exports = router;