module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "env": {
    "browser": false,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "overrides": [
    {
      "files": [
        "**/*.ts",
        "**/*.tsx"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true,
        },
        "warnOnUnsupportedTypeScriptVersion": true,
      },
      "plugins": [
        "@typescript-eslint"
      ],
      "rules": {
        "no-useless-escape": "off",
        "default-case": "off",
        "no-dupe-class-members": "off",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",
        "@typescript-eslint/no-namespace": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
      },
    }
  ],
  "rules": {
    "no-useless-escape": ["warn"],
    "no-constant-condition": ["off"],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "off"
    ]
  }
}
