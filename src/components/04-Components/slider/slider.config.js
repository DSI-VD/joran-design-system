'use strict';

const faker = require('faker'); // require the faker module
const articleCount = 20; // how many articles we should generate data for
const articleData = [];

for (var i = 0; i < articleCount; i++) {
    articleData.push({
        title: faker.lorem.sentence(),
        url: faker.internet.url(),
        date: faker.date.past(),
        image: {
            src: faker.image.unsplash.image('500','500', faker.random.word()),
            alt: faker.lorem.words(),
        }
    });
}

module.exports = {
    context: {
        title: "Slider",
        articles: articleData // use our generated list of articles as context data for our template.
    }
};