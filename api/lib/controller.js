let controller = {

  find: function( req, res, next ) {
    return this.model.find( req.query )
    .then( collection => res.status(200).json(collection) )
    .catch( err => next(err) );
  },

  findOne: function( req, res, next ) {
    return this.model.findOne( req.query )
    .then( doc => res.status(200).json(doc) )
    .catch( err => next(err) );
  },

  findById: function( req, res, next ) {
    return this.model.findById( req.params.id )
    .then(doc => {
      if ( !doc ) { 
        return res.status(404).end(); 
      }
      return res.status(200).json(doc);
    })
    .catch( err => next(err) );
  },

  create: function( req, res, next ) {
    this.model.create( req.body )
    .then( doc => res.status(201).json(doc) )
     .catch( err => next(err) );
  },

  update: function( req, res, next ) {
    const conditions = { 
      _id: req.params.id 
    };

    this.model.update( conditions, req.body )
    .then(doc => {
      if ( !doc) { 
        return res.status(404).end(); 
      }
      return res.status(200).json(doc);
    })
    .catch( err => next(err) );
  },

  remove: function(req, res, next) {
    this.model.remove(req.params.id)
    .then(doc => {
      if (!doc) { 
        return res.status(404).end(); 
      }
      return res.status(204).end();
    })
    .catch( err => next(err) );
  }

}

module.exports = controller;
