import {nodeResolve} from "@rollup/plugin-node-resolve"
export default {
  input: "./lib/editor.js",
  output: {
    file: "./dist/editor.bundle.js",
    format: "iife"
  },
  plugins: [nodeResolve()]
}