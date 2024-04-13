// @ts-check

import eslint from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import tseslint from "typescript-eslint";

const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react,
      "react-native": reactNative,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "@typescript-eslint/ban-types": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "no-console": "error",
      "sort-imports": "error",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "error",
      "react/jsx-key": "error",
      "react/jsx-no-comment-textnodes": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-children-prop": "error",
      "react/no-danger-with-children": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/no-unsafe": "error",
      "react/prop-types": "error",
      "react/require-render-return": "error",
      "react-native/no-unused-styles": "error",
      "react-native/split-platform-components": "error",
      "react-native/no-inline-styles": "error",
      "react-native/no-color-literals": "error",
      "react-native/no-raw-text": "error",
      "react-native/no-single-element-style-arrays": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["packages/client/.expo/"],
  },
);

export default config;
