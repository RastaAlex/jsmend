'use strict';
const {
  nodeResolve: nodeResolve
} = require('@rollup/plugin-node-resolve');
module.exports = {
  input: "./lib/editor.js",

  output: {
    file: "./dist/editor.bundle.js",
    format: "iife"
  },

  plugins: [nodeResolve()]
};