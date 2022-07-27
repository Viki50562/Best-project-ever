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
  const { name, email, password, phone } = req.body;

  const user = await users.create({
    name,
    email,
    password,
    phone,
  });

  res.redirect('/');

  // req.session.user = 'test_user';
  // res.status(201).json({ registration: true });
});

module.exports = router;
