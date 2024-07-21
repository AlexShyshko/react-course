module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    // tsconfigRootDir: __dirname,
    // project: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react-refresh",
    "react",
    "@typescript-eslint",
    "eslint-plugin-react-compiler",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-no-target-blank": "off",
    "react-compiler/react-compiler": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
