import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Angular's unit-test builder bundles each spec with the code it imports, and
    // Vitest's file-system module cache can then serve a stale bundle after a
    // non-spec file changes. Turn the cache off so reruns always test current code.
    fsModuleCache: false,
  },
});
