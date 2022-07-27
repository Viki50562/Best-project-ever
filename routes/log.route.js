const express = require('express');

const React = require('react');
const ReactDomServer = require('react-dom/server');
const Log = require('../views/Log');
const { users } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  const log = React.createElement(Log, { title: 'Authorization' });
  const html = ReactDomServer.renderToStaticMarkup(log);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await users.findAll({
    where: {
      email,
      password,
    },
  });
  if (user.length !== 0) {
    req.session.user = user;
    // res.json({ login: true, route: '/' });
  } else {
    // res.status(403).json({ login: false, message: 'This email is not used in the system' });
  }
  res.redirect('/');
});

module.exports = router;
