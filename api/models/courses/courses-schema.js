
'use strict';

const config 	= require('../../../config');
const Bookshelf = config.db;


let Course = Bookshelf.Model.extend({
  tableName: 'courses',
  hasTimestamps: true
});

module.exports = Bookshelf.model( 'Course', Course );