const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionConfig = require('./session-config');
const ssr = require('../middleware/ssr');

// главная конфигурация приложения
const config = (app) => {
  // использование middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(ssr);
};

module.exports = config;
