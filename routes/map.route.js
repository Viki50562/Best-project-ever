const router = require('express').Router();
const React = require('react');
const ReactDomServer = require('react-dom/server')

const Map = require('../views/user_int/Map');

router.get('/map', (req, res) => {
  res.renderComponent(Map)
});

module.exports = router;