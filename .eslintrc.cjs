module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb", "airbnb/hooks", "plugin:react/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": 0,
    "import/no-extraneous-dependencies": 0,
    "react/prop-types": 0,
    "jsx-a11y/label-has-associated-control": 0
  },
  "ignorePatterns": [".eslintrc.cjs"]
};
