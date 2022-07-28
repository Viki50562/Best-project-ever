// Домашняя карточка
const router = require('express').Router();

// const React = require('react');
// const ReactDomServer = require('react-dom/server');
const miniCards = require('../views/user_int/Minicards');
const { orders } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const orderList = await orders.findAll();
    if (req.session.user) {
      const { user } = req.session;
      res.renderComponent(miniCards, { list: orderList, user: user[0].name });
    } else {
      res.renderComponent(miniCards, { list: orderList, user: null });
    }
  });


module.exports = router;
