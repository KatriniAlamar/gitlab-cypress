const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost/',
    experimentalSessionAndOrigin: true,
    env: {
      requestMode: true,
      snapshotOnly: true,
    },
  },
})
