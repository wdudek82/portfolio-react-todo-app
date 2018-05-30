module.exports = {
  extends: [
    'react-app',
    'airbnb',
    // "jsx-a11y/recommended",
    // "eslint:recommended",
    // "babel-eslint",
  ],
  plugins: [
    // "jsx-a11y",
    'babel',
    // "react"
  ],
  parser: 'babel-eslint',
  // "parserOptions": {
  //   "ecmaVersion": 7,
  // },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'arrow-body-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'jsx-a11y/href-no-hash': [0],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [''],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any'],
        checkContextTypes: false,
        checkChildContextTypes: false,
      },
    ],
    'arrow-parens': ['error', 'always'],
    'space-before-function-paren': 0,
    'function-paren-newline': ['error', 'consistent'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'all',
      },
    ],
  },
};
