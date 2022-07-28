const router = require('express').Router();

const Card = require('../views/user_int/Card');
const { orders } = require('../db/models');

router.post('/card/:id', async (req, res) => {
  const { id } = req.params;
  const choseCard = await orders.findOne({ where: { id }, raw: true });
  res.renderComponent(Card, { title: choseCard.title, img: choseCard.img, price: choseCard.price });
})

module.exports = router;
 