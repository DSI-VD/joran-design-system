'use strict';

const faker = require('faker'); // Require the faker module
const itemsCount = 25; // How many articles we should generate data for
const itemsData = [];
const subItemsData = [];

for (let i = 0; i < itemsCount; i++) {

    const subItemsCount = faker.datatype.number({min:0, max:5});

    for (let y = 0; y < subItemsCount; y++) {
          subItemsData.push({
            name: faker.lorem.sentence(),
            link: faker.internet.url()
          });
      }

  itemsData.push({
    name: faker.lorem.sentence(),
    link: faker.internet.url(),
    items: subItemsData
  });
}

module.exports = {
  context: {
    heading: 'Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless',
    items: itemsData // Use our generated list of articles as context data for our template.
  }
};
