#!/usr/bin/env node --use_strict

/* eslint-disable */

"use strict";
const fs = require('fs');

if (fs.existsSync('./src/index.ts')) {
  require('source-map-support').install();
  require('ts-node').register({});
  require('./src/index.ts');
} else if (fs.existsSync('./src/main.ts')) {
  require('source-map-support').install();
  require('ts-node').register({});
  require('./src/main.ts');
} else if (fs.existsSync('./src/index.js')) {
  require('./src/index.js');
} else if (fs.existsSync('./src/main.js')) {
  require('./src/main.js');
} else {
  console.error('\nNothing to do. Write your src/index.js, src/index.ts, src/main.js or src/main.ts and try again.\n')
}
