'use strict';

const Controller = require('../../lib/controller');
const coursesModel  = require('./courses-facade');

class CoursesController extends Controller {}

module.exports = new CoursesController( coursesModel );