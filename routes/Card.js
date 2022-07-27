const router = require('express').Router();

const OrderItem = require('../views/');
const { Order } = require('../db/models');

router.route('/')
  .post((req, res) => { 
    const { idCard } = req.body; 
    const card = Order.findOne({ where: { id: req.body.idCard }});
    res.renderComponent(OrderItem)
  })

module.exports = router    