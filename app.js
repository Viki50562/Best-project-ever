require('@babel/register');
const express = require('express');
const config = require('./config/config');
// const cardRouter = require('./routes/Card');
const miniCards = require('./routes/minicards.route');
const regologoRouter = require('./routes/regologo.route');
const bigCardRouter = require('./routes/bigcard.route');
const adminRouter = require('./routes/admin.route');

const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', miniCards);
// app.use('/card', cardRouter);
app.use('/', regologoRouter);
app.use('/', bigCardRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
