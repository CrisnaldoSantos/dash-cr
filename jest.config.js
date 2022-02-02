module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{tsx}','!src/**/*.spec.tsx'],
    coverageReporters: ["locv","json"]
  };