/*
 * GET userlist page.
 */

exports.userlist = function(db) {
  return function(req, res) {
    db.collection('userlist').find().toArray(function (err, items) {
      res.json(items);
    })
  }
};

/*
 * POST to adduser.
 */

exports.adduser = function(db) {
  return function(req, res) {
    db.collection('userlist').insert(req.body, function(err, result){
      res.send(
        (err === null) ? { msg: '' } : { msg: err }
      );
    });
  }
};

/*
* PUT to updateuser
*/
exports.update=function(db) {
return function(req, res) {
 // var db = req.db
  var userToUpdate = req.params.id;
  var doc = { $set: req.body};
  db.collection('userlist').updateById(userToUpdate, doc ,function(err, result) {
    res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
  });
}
};
/*
 * DELETE to deleteuser.
 */

exports.deleteuser = function(db) {
  return function(req, res) {
    var userToDelete = req.params.id;
    db.collection('userlist').removeById(userToDelete, function(err, result) {
      res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
  }
};