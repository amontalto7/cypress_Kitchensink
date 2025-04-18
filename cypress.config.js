import { defineConfig } from "cypress";

export default {
  'projectId': '4b7344',
  e2e: {
      "baseUrl" : "http://localhost:8080",
      specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      supportFile: 'cypress/support/e2e.js', // adjust if needed
  },

}
