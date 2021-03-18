// Result-list.config.js
'use strict';

const faker = require('faker'); // Require the faker module
const resultCount = 10; // How many results we should generate data for
const resultData = [];

for (let i = 0; i < resultCount; i++) {
  resultData.push({
    title: faker.lorem.words(), // Generate a random title
    content: faker.lorem.sentences() // Generate a random text
  });
}

module.exports = {
  preview: '@preview--bg',
  status: 'ready',
  context: {
    results: resultData // Use our generated list of results as context data for our template.
  }
};
