var db  = require('../db.js');

export.all = function(cb){
  db.get.collection('users').find().toArray(function(err, result){
    return cb(err, result);
  })
}

export.save = function(data, cb){
  db.get.collection('users').save(data, function(err, result){
    return cb(err, result);
  });
}

export.queryEquality = function(equality, cb){
  db.get.collection('users').find(data).toArray(err, result){
    return cb(err, result);
  }
}
