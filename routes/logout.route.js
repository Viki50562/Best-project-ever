const express = require('express');

const React = require('react');
const ReactDomServer = require('react-dom/server');
const Log = require('../views/Log');
const { users } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = router;
