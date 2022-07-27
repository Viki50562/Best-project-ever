const express = require('express');
const ssr = require('../middleware/ssr');

// главная конфигурация приложения
const config = (app) => {
  // использование middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(ssr);
};

module.exports = config;
