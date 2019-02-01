'use strict';

const imagemin = require('imagemin');
const jpg = require('imagemin-jpegoptim');
const png = require('imagemin-optipng');
const gif = require('imagemin-gifsicle');
const svg = require('imagemin-svgo');

// FIXME move this to conifg
const img = {
  src: 'src/img/*.{jpg,jpeg,png,gif,svg}',
  dist: 'build/img',
  opts: {
    jpg: { max: 50 },
    png: { optimizationLevel: 3 },
    gif: { optimizationLevel: 3 },
    // https://github.com/svg/svgo#what-it-can-do
    svg: {
      minifyStyles: true,
      removeDoctype: true
    }
  }
};

module.exports = (callback) => {
  imagemin([img.src], img.dist, {
    plugins: [
      jpg(img.opts.jpg),
      png(img.opts.png),
      gif(img.opts.gif),
      svg(img.opts.svg)
    ]
  }).then(() => callback());
};
