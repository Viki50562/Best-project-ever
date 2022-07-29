// Главный роут (home page)
const router = require('express').Router();

const UserList = require('../../views/admin int/AdminCardList');
const { orders } = require('../../db/models');

router.route('/cardadmin')
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