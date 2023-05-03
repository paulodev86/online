import { defineConfig } from 'cypress';
import plugin from './plugins/index.js';

export default defineConfig({
  video: false,
  defaultCommandTimeout: 6000,
  modifyObstructiveCode: false,
  fixturesFolder: 'data',
  chromeWebSecurity: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      plugin(on, config);
    },
    specPattern: 'integration_tests/**/*_spec.js',
  },
});