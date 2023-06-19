const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: "https://vue-demo.daniel-avellaneda.com",
    "defaultCommandTimeout": 10000,
    "experimentalSessionAndOrigin": true,
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    }

  },
};