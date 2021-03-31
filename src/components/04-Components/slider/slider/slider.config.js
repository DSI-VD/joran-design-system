'use strict';

const faker = require('faker'); // Require the faker module
const articleCount = 20; // How many articles we should generate data for
const articleData = [];
const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

for (let i = 0; i < articleCount; i++) {
  articleData.push({
    title: faker.lorem.sentence(),
    url: faker.internet.url(),
    date: faker.date.past().toLocaleDateString('fr-CH', dateOptions),
    image: {
      src: faker.image.unsplash.image('500', '500', faker.random.word()),
      alt: faker.lorem.words()
    }
  });
}

module.exports = {
  context: {
    title: 'Projets',
    articles: articleData // Use our generated list of articles as context data for our template.
  }
};
