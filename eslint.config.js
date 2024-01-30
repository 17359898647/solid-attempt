import eslint from '@antfu/eslint-config'

export default eslint({
  ignores: [
    'node_modules',
    'src/types/*',
  ],
  react: {
    overrides: {
      'react/jsx-boolean-value': [2, 'always'],
      'react/jsx-indent': [2, 2],
      'react/jsx-max-props-per-line': [2, {
        maximum: 1,
        when: 'always',
      }],
      'react/jsx-one-expression-per-line': [2, {
        allow: 'literal',
      }],
      'react/jsx-sort-props': [2, {
        callbacksLast: true,
        ignoreCase: false,
        multiline: 'last',
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: false,
      }],
      'react/jsx-wrap-multilines': [2, {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line',
      }],
      'react/no-unknown-property': [2, {
        ignore: ['class'],
      }],
    },
  },
  vue: false,
  jsx: true,
}, {
  rules: {
    'no-console': 0,
  },
})
