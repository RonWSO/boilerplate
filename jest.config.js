module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_module', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
}
