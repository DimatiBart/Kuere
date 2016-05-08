'use strict';
var express = require('express');
var router  = express.Router();
var passport = require('passport');
var shortid = require('shortid');
var mixer = require('../helpers/mixer');

var Post = require('../models/Post');
var Coordinate = require('../models/Coordinate');
var User = require('../models/User');
var Img = require('../models/Img');
//var Tag = require('../models/Tag'); Nahooi

router.post('/create', function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth');
    return;
  }

  var user = req.body.user; // TODO: pass here current user object;
  var postToCreate = req.body.post; // TODO: pass here sent data object;
	var coordinate;

	Coordinate.findOne({latitude: postToCreate.lat, longtitude: postToCreate.lng}, function(err, data){
		if (err) {
			res.status(505).send();
			return;
		}
		if (!data) {
			coordinate = new Coordinate();
			coordinate.id = shortid.generate();
			coordinate.latitude = postToCreate.lat;
			coordinate.longtitude = postToCreate.lng;
			coordinate.save();
		}
		else {
			coordinate = data;
		}
	}).then(function(){
		var img = new Img();
		img.id = shortid.generate();
		img.src = postToCreate.img;
		img.save();

		var post = new Post();
		post.id = shortid.generate();
		post.title = postToCreate.title;
		post.description = postToCreate.description;
		post.type = postToCreate.type;
		post.date = new Date().toLocaleString('en-GB');

		post.coordinate_id = coordinate.id;
		post.user_id = user.id;
		post.img_id = img.id;

		// post.tag_id = tag.id;
		post.save();

		res.status(200).send();
	});

});

router.get('/get_all', function(req, res, next){
	if (!req.isAuthenticated()) {
		res.redirect('/auth');
		return;
	}
	let postArray = [], size;
	Post.find({}, function(err , posts){
		size = posts.length;
		if (err) {
			res.status(404).send();
			return;
		}
		posts.forEach(function(post){
			let tempObj = {};
			tempObj.id = post.id;
			tempObj.title = post.title;
			tempObj.description = post.description;
			tempObj.type = post.type;
			tempObj.date = post.date;
			tempObj.user_id = post.user_id;

			Coordinate.findOne({id: post.coordinate_id}, function(err, data){
				tempObj.coordinates = {
					lat: data.latitude,
					lng: data.longtitude
				}
			}).then(function(){
				Img.findOne({id: post.img_id}, function(err, img){
					if (err) {
						res.status(404).send();
						return;
					}
					tempObj.img = img.src;
				}).then( () => {
					postArray.push(tempObj);
					if (postArray.length === size) {
						res.status(200).json({postArray : postArray});
					}
				});
			})
		});
	})
});

router.post('/edit', function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth');
    return;
  }

	Post
		.findOneAndUpdate({ id: req.params.postId }, res.params.updatedPost, function(err, post){
			if (err) {
				res.status(404).send();
			}
			else {
				res.status(200).send();
			}
		})
});

router.get('/:postId', function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth');
    return;
  }

  Post
    .where({ id: req.params.id })
    .findOne()
    .then(function (post) {
      var deferred = {
        promises: [
          Coordinate.where({ id: post.coordinate_id }),
          User.where({ id: post.user_id }),
          Img.where({ id: post.img_id }),
        ],
        currentlyResolved: 0,
        resolve: function () {
          if (++currentlyResolved === promises.length - 1) {
            res.render('post', {
              post: post,
            });
          }
        },
      };

      promises.collection.forEach(function (promise) {
        promise.findOne().then(function (data) {
          mixer.mix(post, data);
          promises.resolve();
        });
      });
    });
});

router.delete('/:postId', function (req, res, next) {
	//TODO check if it was called by the proper user
	if (!req.isAuthenticated()) {
		res.redirect('/auth');
		return;
	}
  Post
    .where({ id: req.params.postId })
    .findOneAndRemove()
    .then(function resolved(deletedPost) {
      res.status(200).send();
    })
    .catch(function rejected(error) {
      res.status(404).send();
    });
});

router.get('/close/:postId', function (req, res, next) {
	//TODO check if it was called by the proper user
	if (!req.isAuthenticated()) {
		res.redirect('/auth');
		return;
	}

	Post
		.findOneAndUpdate({ id: req.params.postId }, {type: 'closed'}, function(err, post){
			if (err) {
				res.status(404).send();
			}
			else {
				res.status(200).send();
			}
		})
});

module.exports = router;
