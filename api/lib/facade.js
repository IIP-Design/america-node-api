let facade =  {
  create: function( input ) {
    const schema = new this.Schema( input );
    return schema.save();
  },

  update: function( conditions, update ) {
    return this.Schema
    .update( conditions, update, { new: true } )
    .exec();
  },

  find: function( query ) {
    return this.Schema
    .find(query)
    .exec();
  },

  findOne: function( query ) {
    return this.Schema
    .findOne(query)
    .exec();
  },

  findById: function( id ) {
    return this.Schema
    .findById(id)
    .exec();
  },

  remove: function( id ) {
    return this.Schema
    .findByIdAndRemove( id )
    .exec();
  }
}

module.exports = facade;
