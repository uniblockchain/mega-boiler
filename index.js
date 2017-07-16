#!/usr/bin/env node --use_strict

/* eslint-disable */

"use strict";
const fs = require('fs');

if (fs.existsSync('./src/index.ts')) {
  require('source-map-support').install();
  require('ts-node').register({});
  require('./src/index.ts');
} else {
  require('./src/index.js');
}
