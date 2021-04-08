'use strict';

const faker = require('faker'); // Require the faker module
const articleCount = 10; // How many articles we should generate data for
const articleData = [];

for (let i = 0; i < articleCount; i++) {
  const randomWord = faker.random.word();

  articleData.push({
    image: {
      styleModifier: 'c-carousel__figure',
      src: faker.image.unsplash.image('1024', '576', randomWord),
      alt: faker.lorem.words(),
      caption: faker.lorem.sentence(),
    },
    link: faker.datatype.boolean()
  });
}

module.exports = {
  context: {
    title: 'Carouel',
    articles: articleData // Use our generated list of articles as context data for our template.
  }
};
