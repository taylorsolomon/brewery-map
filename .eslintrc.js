module.exports = {
  env: {
    browser: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  }
};
