module.exports = {
  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: ['./jest.setup.js'], 

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!(.*\\.js$|@babel/runtime)/)',
  ],
};

