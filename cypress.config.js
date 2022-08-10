const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    qaBaseUrl: 'https://qa.coursetune.com/',
    stageBaseUrl: 'https://staging.coursetune.com/',
    devBaseUrl: 'https://dev.coursetune.com/',
    localBaseUrl: 'http://localhost:8080/'
  },
});
