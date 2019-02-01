'use strict';

const image = require('./image');
const metalsmith = require('./metalsmith');

buildSite();

function buildSite() {
  console.log('Building production site... \n');
  metalsmith((err, success) => {
    if (err) return console.error(err);
    else return image(() => console.log('Site build complete! \n'));
  });
}
