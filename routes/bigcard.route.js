// Переход на карту после клика (пока без клика)
const React = require('react');
const ReactDomServer = require('react-dom/server');
const router = require('express').Router();
const Card = require('../views/user_int/Card');
// const { orders } = require('../db/models');


// Если юзер авторизован

router.get('/domoi', (req, res) => {
  const bigCard = React.createElement(Card, { title: 'kzkz', img: 'dhhs', price: 'dshksdn' });
  const html = ReactDomServer.renderToStaticMarkup(bigCard);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// Если юзер нажал "не хочу" в карточке
router.get('/return', (req, res) => {
  res.redirect('/')
});


// router.get('/cards/:id', async (req, res) => {
//   const { id } = req.params;

//   const currentCard = await orders.find({ where: { id } });

//   const bigCard = React.createElement(Card, { card: currentCard });
//   const html = ReactDomServer.renderToStaticMarkup(bigCard);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

// router.post('/card', async (req, res) => {
//   const { id } = req.params;
//   const choseCard = await orders.findOne({ where: { id }, raw: true });
//   res.renderComponent(Card, { title: choseCard.title, img: choseCard.img, price: choseCard.price });
// });

module.exports = router;
