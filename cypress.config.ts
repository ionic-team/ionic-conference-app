import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 10000,
  fixturesFolder: 'e2e/fixtures',
  screenshotsFolder: 'e2e/screenshots',
  e2e: {
    baseUrl: 'http://localhost:8100',
    specPattern: [
      'e2e/specs/**/*.cy.{js,jsx,ts,tsx}'
    ]
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
  }
})

