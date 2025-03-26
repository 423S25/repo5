/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: "next/core-web-vitals",
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@next/next/no-img-element": "off"
    }
  };
  