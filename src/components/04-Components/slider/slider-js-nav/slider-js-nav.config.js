'use strict';

const faker = require('faker'); // Require the faker module
const articleCount = 20; // How many articles we should generate data for
const articleData = [];
const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
const randomSizes = [{w:384, h:295},{w:384, h:371},{w:384, h:333},{w:384, h:295}];

for (let i = 0; i < articleCount; i++) {
  let randomSize = randomSizes[Math.floor(Math.random() * randomSizes.length)];
  let randomTitle = faker.lorem.sentence();

  articleData.push({
    title: randomTitle,
    url: faker.internet.url(),
    date: faker.date.past().toLocaleDateString('fr-CH', dateOptions),
    image: {
      src: faker.image.unsplash.image(randomSize.w, randomSize.h, faker.random.word()),
      alt: faker.lorem.words()
    },
    button: {
      styleModifier: 'c-slider-js-nav__article-button',
      text: 'Lire la suite',
      hiddentext: 'de ' + randomTitle
    },
  });
}

module.exports = {
  preview: "@preview--bg",
  context: {
    title: 'Projets',
    articles: articleData // Use our generated list of articles as context data for our template.
  }
};
