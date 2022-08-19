const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iyhj3o',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // retries: 2,
    baseUrl: 'http://qamid.tmweb.ru'
  },
});
