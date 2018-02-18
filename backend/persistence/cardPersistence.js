const fs = require('fs');
const path = require('path');

const cardDataFolder = path.join(__dirname, '..', 'data', 'cards');

function writeCard(card) {
  const formattedCard = {
    id: card.id,
    title: card.title,
    name: card.name,
    category: card.category,
    stats: card.stats
  };

  const filepath = path.join(cardDataFolder, `${card.id}.json`);

  return new Promise(function (resolve, reject) {
    fs.writeFile(filepath, JSON.stringify(formattedCard, null, '  '), function (err) {
      if (err) {
        reject(err);
      }
      else {
        resolve(filepath);
      }
    });
  });
}

function readCard(id) {
  const filepath = path.join(cardDataFolder, `${id}.json`);
  return new Promise(function (resolve, reject) {
    fs.readFile(filepath, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        resolve(JSON.parse(data.toString()))
      }
    })
  });
}

function readAllCards() {
  return new Promise(function (resolve, reject) {
    fs.readdir(cardDataFolder, function (err, files) {
      if (err) {
        reject(err);
      }
      else {
        resolve(extractIdsFromFileNames(files));
      }
    });
  })
}

function extractIdsFromFileNames(files) {
  return files;
}

module.exports = {
  writeCard: writeCard,
  readCard: readCard,
  readAllCards: readAllCards
};