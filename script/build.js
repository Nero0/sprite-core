#!/usr/bin/env node

const webpack = require('webpack');
const fs = require('fs');
const webpackConf = require('../webpack.config.js');

function buildTask(options = {}) {
  return new Promise((resolve, reject) => {
    webpack(webpackConf(options), (err, status) => {
      if(err) reject(err);
      else {
        resolve(status);
      }
    });
  });
}

(async function () {
  const helperPath = './node_modules/@babel/helpers/lib/helpers.js';
  let content;
  if(fs.existsSync(helperPath)) {
    content = fs.readFileSync(helperPath).toString('utf-8');
    const modified = content.replace('helpers.decorate = helper("7.1.5")`', 'helpers.decorate = helper("7.0.0-beta.0")`');
    fs.writeFileSync(helperPath, modified);
  }
  await buildTask(); // build uncompressed file
  await buildTask({esnext: true});
  await buildTask({esnext: true, production: true});
  await buildTask({production: true}); // build compressed file
  if(content) {
    fs.writeFileSync(helperPath, content);
  }
}());
