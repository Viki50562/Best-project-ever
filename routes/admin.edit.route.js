const router = require('express').Router();

const AdminEdit = require('../views/user_int/AdminEdit');
const { orders } = require('../db/models');

router.route('/admin/edit')
  .get((req, res) => {
    res.renderComponent(AdminEdit);
  })
  .post(async (req, res) => {
    const {
      title, img, location, price, sale,
    } = await req.body;
    await orders.create({
      title,
      img,
      location,
      price,
      saleprice: sale,
      admin_id: 1,
    });
    res.redirect('./admin');
  });

module.exports = router;
