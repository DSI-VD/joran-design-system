'use strict';

const faker = require('faker'); // Require the faker module
const promoData = [];
const promoData1 = [];
const promoData4 = [];
const promoData7 = [];


function populate(outputData, itemNumber) {
  for (let i = 0; i < itemNumber; i++) {
    outputData.push({
      text: faker.lorem.sentence(),
      image: {
        src: faker.image.unsplash.image('500', '500', faker.random.word()),
        alt: faker.lorem.words()
      },
      link: {
        url: faker.internet.url()
      }
    });
  }
}

populate(promoData, 20);
populate(promoData1, 1);
populate(promoData4, 4);
populate(promoData7, 7);


module.exports = {
  context: {
    title: 'Données mises en évidences',
    promos: promoData // Use our generated list of articles as context data for our template.
  },
  variants: [
    {
      name: '1 item',
      context: {
        promos: promoData1
      }
    },
    {
      name: '4 items',
      context: {
        promos: promoData4
      }
    },
    {
      name: '7 items',
      context: {
        promos: promoData7
      }
    }
  ]
};
