const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to the Next.js app to load next.config.js and .env files in the test environment
  dir: './',
})

// Thiss Adds any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig) 