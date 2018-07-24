/**
 * Index/main route 
 */
var express = require('express');
var router = express.Router();

const { get } = require('../../helper/request')

/**
 * GET Home route
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {Object} next - The next middleware in the middleware chain
 */
router.get('/', async function(req, res, next) {
	try {
		var state = {};
		state.peoples = await get('/people', {id:1});
		
		res.render('home', state);
	} catch(e) {
		console.log(e);
	}
});

router.get('/login', function(req, res, next) { 
  res.render('login');
});

module.exports = router;
