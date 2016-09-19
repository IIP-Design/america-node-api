const controller = require('../../lib/controller');
const coursesModel  = require('./courses-facade');

let coursesController = Object.create( controller );
coursesController.model = coursesModel;

module.exports = coursesController;
