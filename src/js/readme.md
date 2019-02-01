# Contents

## `main.js` and `main.min.js`
This main file, `main.js`, and its minified counterpart, `main.min.js`, are the output of the Browserify and Babelify compiling and transpiling process. The `main.js` should **only** import modules from `/lib` (using es2015 `import` syntax), acting as the global namespace for *all* JavaScript code that is not from a vendor.

### Important
1. Never include vendor content in `main.js`
2. `main.min.js` includes a JSON data URL for sourcemaps

## `/lib`
Place all modules for export in this directory. They are then available for import by `main.js`.

## `/vendor`
Always place all **minified** vendor content in this directory. It is ignored by Browserify and the build system will copy it directly to the `/build` output (specifically, `/build/js/vendor`).

#### More information on es2015 module  [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).
