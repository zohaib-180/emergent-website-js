module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // You can adjust these rules to your needs
    "no-unused-vars": "warn",
    "react/prop-types": "off", // You can leave this on if you're using PropTypes in React
    "react/react-in-jsx-scope": "off", // If using Next.js or similar, you don't need React in scope
  },
  overrides: [
    {
      files: ["**/*.js"], // Only for JavaScript files
      rules: {
        "no-parse": "off", // Disable parse-related errors (custom rule)
      },
    },
  ],
};
