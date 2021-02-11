const { pathsToModuleNameMapper } = require('ts-jest/utils');
const moduleNameMapper = pathsToModuleNameMapper(
  {
    components: ['src/components'],
    'components/*': ['src/components/*'],
    content: ['src/content'],
    'content/*': ['src/content/*'],
    core: ['src/core'],
    'core/*': ['src/core/*'],
    scenes: ['src/scenes'],
    'scenes/*': ['src/scenes/*'],
    screens: ['src/screens'],
    'screens/*': ['src/screens/*'],
    store: ['src/store'],
    'store/*': ['src/store/*'],
    styles: ['src/styles'],
    'styles/*': ['src/styles/*'],
    utils: ['src/utils'],
    'utils/*': ['src/utils/*'],
  },
  { prefix: '<rootDir>/' },
);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coverageReporters: ['json', 'json-summary', 'lcov', 'text-summary', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/serviceWorker.ts',
    '!src/reportWebVitals.ts',
    '!src/setupTests.ts',
  ],
  coveragePathIgnorePatterns: [
    './src/*/types.{ts,tsx}',
    './src/index.tsx',
    './src/serviceWorker.ts',
    './src/setupTests.ts',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper,
};
