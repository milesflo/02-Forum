var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./pages/index', { title: 'Homepage' });
});

router.get('/login', function(req,res,next){
	res.render('./pages/login', {title:'Log In'});
});


router.get('/signup', function(req,res,next){
	res.render('./pages/signup', {title:'Sign Up'});
});

router.post('/signup', function(req,res,next){
	console.log();
	knex('users').insert(
		{username: req.body.username, 
		password:req.body.password,
	 	email:req.body.email,
	 	is_mod: false})
	.then(function(){
		res.redirect('/');
	})
});

router.get('/search', function(req,res,next){
	res.render('./pages/search', {title:'search'});
});

router.get('/logout', function(req,res,next){
	//clear cookies/session
	res.redirect('/')
});

module.exports = router;