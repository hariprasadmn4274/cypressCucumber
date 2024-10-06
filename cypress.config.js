const cucumber = require('cypress-cucumber-preprocessor').default//1.to make deault to read feature file instead of cy.js files
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())//1.
    },
    specPattern: 'cypress/e2e/**/*.feature',// 1.to read this files
  },
});
