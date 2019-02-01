'use strict';

const Handlebars = require('handlebars');
const Metalsmith = require('metalsmith');
const ignore = require('metalsmith-ignore');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const moveUp = require('metalsmith-move-up');

module.exports = (callback) => {
  Metalsmith('./')
    .clean(true)
    .use(ignore([
      '**/**/.DS_Store',
      '**/**/readme.md',
      'html/partials/**/*',
      'js/lib/**/*',
      'js/main.js',
      'sass/**/*'
    ]))
    .use(markdown({ gfm: true }))
    .use(layouts({
      engine: 'handlebars',
      directory: './src/html/partials',
      partials: './src/html/partials'
    }))
    .use(moveUp({
      transforms: [{
        pattern: 'html/*',
        by: 1,
        opts: { dot: false }
      }]
    }))
    .destination('./build')
    .use()
    .build((err) => {
      if (err) return callback(err);
      return callback(null);
    });
};
