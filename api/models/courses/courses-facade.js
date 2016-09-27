const Model 			= require('../../lib/facade');
const coursesSchema  	= require('./courses-schema');


class CoursesModel extends Model {
	
}

module.exports = new CoursesModel( coursesSchema );
