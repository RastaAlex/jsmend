'use strict';

const {run} = require('madrun');

module.exports = {
    'lint': () => 'putout . -f progress',
    'fresh:lint': () => run('lint', '--fresh'),
    'lint:fresh': () => run('lint', '--fresh'),
    'start': () => 'node server/server.js',
    'fix:lint': () => run('lint', '--fix'),
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
    'coverage': () => 'nyc npm test',
    'test': () => 'supertape test/*.js',
    'watch:coverage': () => run('watcher', 'npm run coverage'),
    'watch:test': () => run('watcher', 'npm test'),
    'watcher': () => 'nodemon -w test -w --exec',
    'watch:build': () => run('build', '-w'),
    'build': () => 'rollup client/editor.js -f iife -o dist/editor.bundle.js -p @rollup/plugin-node-resolve',
};
