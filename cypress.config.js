const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/integration/features/*.feature",
    supportFile: "cypress/support/e2e.js", // upewnij się, że masz ten plik
  },
  "cypress-cucumber-preprocessor": {
    nonGlobalStepDefinitions: true,
    stepDefinitions: "cypress/integration/**/*.js", // To MUSI być jawnie określone
  },
});
