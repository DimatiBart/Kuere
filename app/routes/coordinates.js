var express = require('express');
var router = express.Router();
var shortid = require('shortid');
var mixer = require('../helpers/mixer');

var Coordinate = require('../models/Coordinate');

router.get('/:id', function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth');
    return;
  }

  // it will find one Coordinate entity, if @id passed
  // otherwise it will find all entities

  var query = req.params.id
    ? Coordinate.where({ id: req.params.id }).findOne()
    : Coordinate.where({}).find();

  query.then(function resolved(fetchResult) {
    res.status(200).send(fetchResult);
  }).catch(function rejected(error) {
    res.status(404).send();
  });

});

router.post('/create', function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth');
    return;
  }

  var coordinateToCreate = req.body.coordinate;

  var coordinate = new Coordinate();
  coordinate.id = shortid.generate();
  coordinate.latitude = coordinateToCreate.latitude;
  coordinate.longtitude = coordinateToCreate.longtitude;
  coordinate.save();

  res.status(200).send();
});

router.post('/edit', function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth');
    return;
  }

  var coordinateToEdit = req.body.coordinate;

  Coordinate.where({ id: coordinateToEdit.id })
    .findOne()
    .then(function (coordinate) {
      coordinate.latitude = coordinateToEdit.latitude;
      coordinate.longtitude = coordinateToEdit.longtitude;
      coordinate.save();

      res.status(200).send();
    });
});

router.delete('/:id', function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth');
    return;
  }

  Coordinate.where({ id: req.params.id })
    .findOneAndRemove()
    .then(function (deleted) {
      res.status(200).send();
    }).catch(function (error) {
      res.status(404).send();
    });
});
