module.exports = {
  roots: ['./__tests__'],
  displayName: 'editor-tests',
  testMatch: ['**/__tests__/**/*.js'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['/node_modules/(?!@tecsinapse/ui-kit).+\\.js$'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};
