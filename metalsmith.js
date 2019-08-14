// Metalsmith depencencies
const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const ignore = require('metalsmith-ignore');
const layouts = require('metalsmith-layouts');

const fs = require('fs');

// Metalsmith pipeline
function metalsmithBuild(callback) {
    Metalsmith(__dirname)
        .clean(true)
        .use(ignore(['.DS_Store', 'img/src/**/*', 'sass/**/*', 'js/src/**/*', 'js/app.js']))
        .use(
            layouts({
                engine: 'handlebars',
                directory: './src/templates/',
                partials: './src/templates/partials/'
            })
        )
        .destination('./build')
        // Pass in 'true' bool to check debug/logs
        .use(metalsmithDebug(false))
        .build(error => {
            if (error) {
                callback(error);
            } else {
                callback();
            }
        });
}

// Metalsmith debug utility
function metalsmithDebug(log) {
    return function(files, metalsmith, callback) {
        if (log) {
            console.log('\nMetaData:');
            console.log(metalsmith.metadata());
            for (let item in files) {
                console.log('\nFile:');
                console.log(files[item]);
            }
        }
        callback();
    };
}

module.exports = metalsmithBuild;
