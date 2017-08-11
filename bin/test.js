const fs = require('fs');
const ps2ico = require('../lib');

fs.readFile('slime1.ico', (err, { buffer }) => {
  if (err) {
    throw err;
  }

  console.log(ps2ico(buffer));
});
