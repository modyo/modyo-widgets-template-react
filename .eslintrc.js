module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    'max-len': [2, {
      code: 120,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
      ignorePattern: 'd="([\\s\\S]*?)"',
    }],
    'array-bracket-newline': ['warn', { minItems: 3 }],
    'array-element-newline': ['warn', { minItems: 3 }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.return value
      ],
    }],
  },
  overrides: [{
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    env: {
      jest: true,
    },
  }],
};
