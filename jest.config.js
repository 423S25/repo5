const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // 👈 this enables @/ to map to src/
    "^@/firebaseConfig$": "<rootDir>/src/__mocks__/firebaseConfig.ts", // 👈 this mocks it
  },
};

module.exports = createJestConfig(customJestConfig);
