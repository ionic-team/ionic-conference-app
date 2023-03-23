import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    baseUrl: 'http://localhost:8100',
    specPattern: [
      'e2e/specs/tutorial.cy.ts',
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
