// Александр С.

const express = require('express');

const React = require('react');
const ReactDomServer = require('react-dom/server');
const Reg = require('../views/Reg');
const Log = require('../views/Log');
const { users } = require('../db/models');

const router = express.Router();

// Registration routes
router.get('/reg', (req, res) => {
  const reg = React.createElement(Reg, { title: 'Registration' });
  const html = ReactDomServer.renderToStaticMarkup(reg);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/reg', async (req, res) => {
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

// Authorization routes
router.get('/log', (req, res) => {
  const log = React.createElement(Log, { title: 'Authorization' });
  const html = ReactDomServer.renderToStaticMarkup(log);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/log', async (req, res) => {
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

// Logout routes
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = router;
