const router = require('express').Router();

const { orders } = require('../db/models');

router.delete('/:id', async (req, res) => {
  const { id } = await req.params;
  console.log( id );
  const deleteCard = await orders.destroy({ where: { id }});
  if (deleteCard) {
    res.json({ delete: true })
  } else {
    res.status(404).json({ delete: false });
  }
});

module.exports = router;
