// jest.config.js
module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!axios|other-esm-modules)/"
  ],
};
