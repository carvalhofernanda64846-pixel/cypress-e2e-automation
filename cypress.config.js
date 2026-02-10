const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/teste-e2e/**/*.cy.js',
    baseUrl: 'https://www.automationpratice.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
