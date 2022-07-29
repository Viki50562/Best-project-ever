// Переход на карту после клика (пока без клика)
const React = require('react');
const ReactDomServer = require('react-dom/server');
const router = require('express').Router();
const Card = require('../../views/admin int/BigCardAdmin');
const { orders } = require('../../db/models');

router.route('/bigcardadmin')
  .get(async (req, res) => {
    const {id} = req.query;
    const card = await orders.findOne({ 
      where: {id},
      raw: true,
    });
    if (req.session.user) {
      const { user } = req.session;
      res.renderComponent(Card, { Cards: card, user: user[0].name, admin: user[0].admin });
       
    } else {
      res.renderComponent(Card, { Cards: card, user: null });
    }
  });


router.get('/return', (req, res) => {
  res.redirect('/')
});


module.exports = router;
