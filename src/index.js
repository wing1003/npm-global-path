'use strict';

// https://docs.npmjs.com/cli/v6/configuring-npm/folders
const os = require('os');
const path = require('path');

const GLOBAL_NPM_PATH = {
  'Darwin': '/lib/node_modules', // mac
  'Windows_NT': '/node_modules', // windows
  'Linux': '/lib/node_modules', // linux
  'Unix': '/lib/node_modules' // unix
};

function getGlobalNpmModulesPath() {
  const type = os.type();
  const modulesPath = GLOBAL_NPM_PATH[type];
  if (modulesPath) {
    return modulesPath;
  } else {
    throw new Error('The operating system is not supported!');
  }
}

function getNpmGlobalModulesPath() {
  const node_prefix = path.resolve(process.execPath, '../..');
  return path.join(node_prefix, getGlobalNpmModulesPath());
}

module.exports = getNpmGlobalModulesPath;
