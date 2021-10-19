module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "http://localhost:3000",
  },
  transform: {
    "\\.js$": "react-scripts/config/jest/babelTransform",
  },
  verbose: true,
  testTimeout: 50000,
};
