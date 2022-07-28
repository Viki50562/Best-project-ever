const router = require('express').Router();

const Admin = require('../views/user_int/Admin');
const { orders } = require('../db/models');

router.route('./admin')
  .get((req, res) => {
    res.renderComponent(Admin);
  });

module.exports = router;
