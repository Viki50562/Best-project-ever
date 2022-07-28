// Александр С.

const express = require('express');
const bcrypt = require('bcrypt');

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

  const userInDb = await users.findAll({
    where: {
      email,
    },
  });

  if (userInDb.length !== 0) {
    res.json({ registration: false });
  } else {
    await users.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      phone,
    });

    const user = await users.findAll({
      where: { email },
    });

    req.session.user = user;
    res.json({ registration: true });
  }
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
    where: { email },
    raw: true,
  });

  if (user && (await bcrypt.compare(password, user[0].password))) {
    req.session.user = user;
    res.json({ login: true });
  } else {
    res.json({ login: false });
  }
});

// Logout routes
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = router;
