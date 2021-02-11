'use strict';

const {run} = require('madrun');

module.exports = {
    'lint': () => 'putout lib/bigNumbers.js',
    'fix:lint': () => run('lint', '--fix'),
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
    'coverage': () => 'nyc npm test',
    'test': () => 'supertape test/*.js',
    'watch:coverage': () => run('watcher', 'npm run coverage'),
    'watch:test': () => run('watcher', 'npm test'),
    'watcher': () => 'nodemon -w test -w --exec',
};