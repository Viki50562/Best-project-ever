const router = require('express').Router();

const userHome = require('../views/user_int/User');
const { orders } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const orderList = await orders.findAll();
    if (req.session.user) {
      const { user } = req.session;
      res.renderComponent(userHome, { list: orderList, user: user[0].name });
    } else {
      res.renderComponent(userHome, { list: orderList, user: null });
    }
  });

module.exports = router;
