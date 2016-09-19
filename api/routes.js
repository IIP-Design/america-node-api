const Router = require('express').Router;
const router = new Router();

const courses  = require('./models/courses/courses-router');
//const lessons  = require('./models/lessons/lessons-router');
//const instructors  = require('./models/instructors/instructors-router');

router.route('/').get((req, res) => {
	res.status( 200 ).send( 'ok' );
  	//res.json({ message: 'Welcome to test API!' });
});

router.use( '/courses', courses );
//router.use( '/lessons', lessons );
//router.use( '/instructors', instructors );

module.exports = router;