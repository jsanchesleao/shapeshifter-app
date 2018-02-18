const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const apiHandlers = require('./apihandlers');
const app = express();

app.use(bodyParser.json());

app.get('/err', function (req, res, next) {
  next('foo');
});

app.put('/card/:id', apiHandlers.cardApi.writeCardHandler);
app.get('/card/:id', apiHandlers.cardApi.readCardHandler);
app.get('/card', apiHandlers.cardApi.readAllCardsHandler);

app.use(apiHandlers.errorHandlers.defaultErrorHandler);

app.listen(config.port, function () {
  console.log(`app is running on localhost:${config.port}`);
});