require('@babel/register');
const express = require('express');
const config = require('./config/config');
// const cardRouter = require('./routes/Card');
const homeRouter = require('./routes/Homerout');
const regRouter = require('./routes/reg.route');
const logRouter = require('./routes/log.route');
const logoutRouter = require('./routes/logout.route');

const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', homeRouter);
// app.use('/card', cardRouter);
app.use('/reg', regRouter);
app.use('/log', logRouter);
app.use('/logout', logoutRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
