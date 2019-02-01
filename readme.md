# Bhakti Barn Yoga Website

Marketing website for Bhakti Barn Yoga Website using Metalsmith, Bulma, Vue, Gulp and Node.js

## Development requirements

- Node.js 6.x.x
- npm 3.x.x
- gulp-cli 1.x.x

Note: `gulp-cli` is a npm module that must be installed globally (using the `-g` or `--global` flag).

## Basic use

1. Clone this repository to machine
2. `cd` to cloned directory
3. `npm i` to install dev dependencies
4. `gulp` will handle all building/compiling/serving
5. Console will log your local IP to view site on other devices via Browser Sync

### General Metalsmith

[Metalsmith](http://www.metalsmith.io) is similar to Gulp in the sense that it chains methods together. Metalsmith allows for a number of different plugins (functions) to be invoked within the Metalsmith's various methods (`use()`, `destination()`, `build()`, etc.), such as files to ignore, whether or not to use Markdown, the type of template generator to use, so on and so forth. Simply put, its very "pluggable" and creating a plugin is rather straightforward, as it's all JavaScript under the hood. Feel free to take a look at some of the existing plugins within the `node_modules` directory to get a feel for how it manipulates content.

There isn't too much that needs to be done when configuring or working with Metalsmith, but it's methods all live in `metalsmith.js`.

### Handlebars Templates

The template engine used for this project is [Handlebars](http://handlebarsjs.com). It's similar to Liquid, except it is much more JavaScript-centric.