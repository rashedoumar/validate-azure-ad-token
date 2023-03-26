module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:unicorn/recommended', 'plugin:typescript-sort-keys/recommended'],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['folders', 'sort-destructure-keys', 'unused-imports'],
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        'no-console': 'off',
        'linebreak-style': 0,
        'no-continue': 'off',
        'consistent-return': 'off',
        'prefer-arrow-callback': 2,
        'operator-linebreak': 'off',
        'no-confusing-arrow': 'off',
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
        'no-restricted-syntax': 'off',
        'no-prototype-builtins': 'off',
        'class-methods-use-this': 'off',
        'function-paren-newline': 'off',
        'newline-per-chained-call': 'off',
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
          { blankLine: 'always', prev: 'directive', next: '*' },
          { blankLine: 'any', prev: 'directive', next: 'directive' },
          { blankLine: 'always', prev: 'if', next: '*' },
          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: 'function', next: 'function' },
        ],
        'implicit-arrow-linebreak': 'off',
        'import/order': 'off',
        'import/no-cycle': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/prefer-type-error': 'off',
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-query-selector': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/prefer-array-index-of': 'off',
        'unicorn/prefer-add-event-listener': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/filename-case': [
          'error',
          {
            case: 'kebabCase',
          },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: ['interface', 'type'],
            next: '*',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
          {
            selector: 'enum',
            format: ['PascalCase'],
            custom: {
              regex: '^E[A-Z]',
              match: true,
            },
          },
        ],
        'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],
        'folders/match-regex': [2, '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', `${process.cwd()}/`],
        'unused-imports/no-unused-imports': 'error',
      },
    },
  ],
};
