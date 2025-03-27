const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:8080', // Fallback to local
    },
    experimentalStudio: true,
  },
});
