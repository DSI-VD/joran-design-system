// result-list.config.js
'use strict';

const faker = require('faker'); // require the faker module
const resultCount = 10; // how many results we should generate data for
const resultData = [];

for (var i = 0; i < resultCount; i++) {
    resultData.push({
        title: faker.lorem.words(), // generate a random title
        content: faker.lorem.sentences()  // generate a random text
    });
}

module.exports = {
    preview: "@preview--bg",
    status: "review",
    context: {
        results: resultData // use our generated list of results as context data for our template.
    }
};
