require('@babel/register');
const express = require('express');
const config = require('./config/config');
// const cardRouter = require('./routes/Card');
const homeRouter = require('./routes/Homerout')

const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', homeRouter);
// app.use('/card', cardRouter);


app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту.`)
})

