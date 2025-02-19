'use strict';

module.exports = {
  plugins: ['prettier-plugin-ember-template-tag'],
  singleQuote: true,
  overrides: [
    {
      files: ['*.html', '*.hbs'],
      options: {
        singleQuote: false,
        parser: 'glimmer',
      },
    },
    {
      parser: 'ember-template-tag',
      files: '*.{js,gjs}',
      options: {
        singleQuote: true,
        templateSingleQuote: false,
      },
    },
    {
      files: '*.{css,scss}',
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.md'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
