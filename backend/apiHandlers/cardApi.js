const cardPersistence = require('../persistence/cardPersistence');

function writeCardHandler(req, res, next) {
  const card = req.body;
  const id = req.params.id;

  card.id = id;
  cardPersistence.writeCard(card).then(success => {
    res.json(success);
  }).catch(next);
}

function readCardHandler(req, res, next) {
  const id = req.params.id;
  cardPersistence.readCard(id).then(card => {
    res.json(card);
  }).catch(next);
}

function readAllCardsHandler(req, res, next) {
  cardPersistence.readAllCards().then(cards => {
    res.json(cards);
  }).catch(next);
}

module.exports = {
  writeCardHandler: writeCardHandler,
  readCardHandler: readCardHandler,
  readAllCardsHandler: readAllCardsHandler
};