export default {
  testEnvironment: 'jest-environment-node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'src/app.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};
