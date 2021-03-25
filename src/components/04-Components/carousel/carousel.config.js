'use strict';

const faker = require('faker'); // require the faker module
const articleCount = 10; // how many articles we should generate data for
const articleData = [];

for (var i = 0; i < articleCount; i++) {
  let randomWord = faker.random.word();

  articleData.push({
    image: {
      styleModifier: 'c-carousel__figure',
      src: faker.image.unsplash.image('1024','576', randomWord),
      alt: faker.lorem.words(),
      caption: faker.lorem.sentence(),
    }
  });
}

module.exports = {
  context: {
    title: "Carouel",
    articles: articleData // use our generated list of articles as context data for our template.
  }
};
