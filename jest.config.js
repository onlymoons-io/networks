/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['../jest.setup.js'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: ['.spec.ts$'],
  testPathIgnorePatterns: ['/node_modules', '<rootDir>/main.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules', 'jest.setup.js'],
  collectCoverageFrom: ['**/*.{ts,tsx,js,jsx}', '!**/__tests__/**'],
  coverageDirectory: '../pages/coverage/unit',
  coveragePathIgnorePatterns: ['<rootDir>/main.ts'],
  // coverageThreshold: {
  //   global: {
  //     statements: 100,
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //   },
  // },
  detectOpenHandles: true,
  verbose: true,
}
