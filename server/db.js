const mongoClient =  require('mongodb').MongoClient;

var state = {
  db : "null"
}

exports.connect = function(url, done){
if (state.db){
  return done();
}
else{
  mongoClient.connect(url, function(err, db){
      if(err){
        return done(err);
      }else{
        state.db = db;
        return done();
      }
  });
 }
}

exports.get = function(){
  return state.db;
}

exports.close = function(done){
  if(state.db){
    state.db.close(function(err,result){
      if(err){
        console.log("somenthing happen and could not close connection");
      }
      else{
        state.db = null;
        state.mode = null;
        done(err);
      }
    });
  }
}
