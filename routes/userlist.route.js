const router = require('express').Router();

const UserList = require('../views/user_int/UserList');
const { orders } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const orderList = await orders.findAll({ raw: true });
    if (req.session.user) {
      const { user } = req.session;
      res.renderComponent(UserList, { arrCards: orderList, user: user[0].name });
    } else {
      res.renderComponent(UserList, { arrCards: orderList, user: null });
    }
  });

module.exports = router;
