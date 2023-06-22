const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "oes3d8",
  reporter: "mochawesome",
  reporterOptions:{
    "reporterFilename": "[name]-report",
    "owerwrite": true,
    "html": true,
    "json": true,
  },
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1440,
    baseUrl:'https://www.google.com/',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
