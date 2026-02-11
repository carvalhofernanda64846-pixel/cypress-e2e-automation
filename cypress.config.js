const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ['cypress/teste-e2e/**/*.cy.js', 'cypress/e2e/1-getting-started/**/*.cy.js'],
    baseUrl: 'https://www.automationpratice.com.br',
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    chromeWebSecurity: false,
    video: false,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
