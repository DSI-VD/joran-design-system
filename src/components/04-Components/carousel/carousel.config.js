'use strict';

const faker = require('faker'); // require the faker module
const articleCount = 10; // how many articles we should generate data for
const articleData = [];

for (var i = 0; i < articleCount; i++) {
    let randomWord = faker.random.word();
    articleData.push({
        image: {
            styleModifier: 'c-carousel__figure',
            src: faker.image.unsplash.image('800','450', randomWord),
            alt: faker.lorem.words(),
            caption: faker.lorem.sentence(),
            srcset: [
                {
                    url: faker.image.unsplash.image('320','180', randomWord),
                    width: '320w'
                },
                {
                    url: faker.image.unsplash.image('540','303', randomWord),
                    width: '540w'
                },
                {
                    url: faker.image.unsplash.image('720','405', randomWord),
                    width: '720w'
                },
                {
                    url: faker.image.unsplash.image('960','540', randomWord),
                    width: '960w'
                },
                {
                    url: faker.image.unsplash.image('1140','641', randomWord),
                    width: '1140w'
                }
            ]
        }
    });
}

module.exports = {
    context: {
        title: "Carouel",
        articles: articleData // use our generated list of articles as context data for our template.
    }
};