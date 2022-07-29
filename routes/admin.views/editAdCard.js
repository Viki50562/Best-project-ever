// Переход на карту после клика (пока без клика)
const React = require('react');
const ReactDomServer = require('react-dom/server');
const router = require('express').Router();
const Card = require('../../views/admin int/BigCardAdmin');
const { orders } = require('../../db/models');

router.route('/bigcardadmin')
  .get(async (req, res) => {
    const card = await orders.findOne({ raw: true });
    console.log(card);
    if (req.session.user) {
      const { user } = req.session;
      res.renderComponent(Card, { Cards: card, user: user[0].name });
       
    } else {
      res.renderComponent(Card, { Cards: card, user: null });
    }
  });


router.get('/return', (req, res) => {
  res.redirect('/')
});


module.exports = router;
