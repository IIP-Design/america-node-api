'use strict';

const controller 	= require('./courses-controller');
const Router 		= require('express').Router; 
const router 		= new Router();

// router.route('/')
// 	.get( (...args) => controller.find(...args) )
//   	.post( (...args) => controller.create(...args) );

// router.route('/:id')
//   	.put( (...args) => controller.update(...args) )
//   	.get( (...args) => controller.findById(...args) )
//   	.delete( (...args) => controller.remove(...args) );


router.route('/')
	.get()
  	.post();

router.route('/:id')
  	.put()
  	.get()
  	.delete();


module.exports = router;