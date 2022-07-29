const router = require('express').Router();

const UserList = require('../views/user_int/UserList');
const Card = require('../views/admin int/BigCardAdmin');
const { orders } = require('../db/models');


router.route('/')
  .get(async (req, res) => {
    const orderList = await orders.findAll({ raw: true });
    if (req.session.user) {
      const { user } = req.session;
      res.renderComponent(UserList, { arrCards: orderList, user: user[0].name, admin: user[0].admin });
    } else {
      res.renderComponent(UserList, { arrCards: orderList, user: null });
    }
  });

module.exports = router;

router.get('/newcardadmin', async (req, res) => {
  const card = {
    title: '',
    discription: '',
    price: '',
    saleprice: '',
  };
  if (req.session.user) {
    const { user } = req.session;
    res.renderComponent(Card, { Cards: card, user: user[0].name, admin: user[0].admin });
     
  } else {
    res.renderComponent(Card, { Cards: card, user: null });
  }
});

router.get('/delete', async (req,res) => {
  const { id } = req.query;
  await orders.destroy({where: {id}});
  res.redirect('cardadmin');
});

router.post('/newadmincard', async (req,res) => {
  const {id, title, img, discription, location, price, saleprice} = req.body;
  
  if (id) {
    await orders.update(
      { title,
        img,
        discription,
        location,
        price,
        saleprice, },
      { where: {id} }
      );
  } else {
    await orders.create({
      title,
      img,
      discription,
      location,
      price,
      saleprice,
    });
  }

  res.redirect('cardadmin');
});