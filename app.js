require('@babel/register');
const express = require('express');
const config = require('./config/config');
// const cardRouter = require('./routes/bigcard.route');
const userList = require('./routes/userlist.route'); // поменяла!!!!!
const regologoRouter = require('./routes/regologo.route');
const bigCardRouter = require('./routes/bigcard.route');
const adminRouter = require('./routes/admin.route');
const HomeAdmin = require('./routes/admin.views/adHome');
const EditAdminCard = require('./routes/admin.views/editAdCard');
const submitOrder = require('./routes/submit.order')

const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);


app.use('/', HomeAdmin);
app.use('/', EditAdminCard);
app.use('/', userList); // поменяла!!!!
// app.use('/card', cardRouter);
app.use('/', regologoRouter);
app.use('/', bigCardRouter);
app.use('/', submitOrder);
app.use('/', adminRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
