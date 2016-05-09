var express = require('express');
var router  = express.Router();
var User = require('../models/User');

router.get('/:id', function (req, res, next) {
  User.where({ id: req.params.id })
    .findOne()
    .then(function (user) {
      res.send(JSON.stringify(user));
    })
    .catch(function (err) {
      res.status(404).send();
    });
});

router.post('/edit', function (req, res, next) {
  var userToEdit = req.body.user;

  User.where({ id: userToEdit.id })
    .findOneAndUpdate(userToEdit)
    .then(function () {
      res.status(200).send();
    })
    .catch(function () {
      res.status(404).send();
    });
});
module.exports = router;
