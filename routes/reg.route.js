const express = require('express');

const React = require('react');
const ReactDomServer = require('react-dom/server');
const Reg = require('../views/Reg');

const router = express.Router();

router.get('/', (req, res) => {
  const reg = React.createElement(Reg, { title: 'Registration' });
  const html = ReactDomServer.renderToStaticMarkup(reg);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', (req, res) => {
  req.session.user = 'test_user';
  res.status(201).json({ registration: true });
});

module.exports = router;
