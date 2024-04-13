export default {
  "**/*.ts": "tsc-files --noEmit",

  "**/*.{ts,js,tsx,jsx}": ["bunx prettier . --write", "bunx eslint ."],

  "**/*.{json,jsonc,md,yml,yaml}": "bunx prettier . --write",
};
