const express = require('express');
const passport = require('passport');
const router = express.Router();
const passportSetup = require('../OAuth/config/passport_setup');

const custController = require('../controllers/custController');
// const cartController = require('../controllers/cartController');

// customer signs up
router.post('/signup', custController.createUser, (req, res) => {
  console.log('sign up worked, entered middleware');
  res.status(200).json('the sign up fucking worked!');
});

// customer signs in and cart loads 'get' request
router.post('/login', custController.verifyCust, (req, res) => {
  res.status(200).json(res.locals);
});

// customer deletes their login (Stretch feature)
// router.delete('/', custController.deleteUser, (req, res) => {});
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.status(200).json(res.locals);
});
// // user modifies quantity in cart - 'put' request
// router.put('/', custController.updateCustInfo, (req, res) => {});

module.exports = router;
