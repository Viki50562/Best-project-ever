const router = require('express').Router();

const userHome = require('../views/user_int/User');
const { orders } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const orderList = await orders.findAll();
    res.renderComponent(userHome, { list: orderList});
  });

module.exports = router;
