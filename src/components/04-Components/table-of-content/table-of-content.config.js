'use strict';

const faker = require('faker'); // Require the faker module
const itemsCount = 10; // How many articles we should generate data for
const itemsData = [];
const subItemsData = [];

const subItemsCount = faker.datatype.number({min:2, max:5});

for (let i = 0; i < itemsCount; i++) {
  itemsData.push({
    name: faker.lorem.sentence(),
    url: faker.datatype.uuid(),
    i: i,
    items: subItemsData
  });
}

for (let y = 0; y < subItemsCount; y++) {
  subItemsData.push({
    name: faker.lorem.sentence(),
    url: 'coucou',
    y: y,
    subItemsCount: subItemsCount
  });
}

module.exports = {
  context: {
    heading: 'Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless',
    items: itemsData // Use our generated list of articles as context data for our template.
  }
};
