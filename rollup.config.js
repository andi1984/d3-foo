import npm from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  entry: "index.js",
  format: "umd",
  moduleName: "d3",
  plugins: [
      babel(babelrc()),
      npm({jsnext: true})
  ],
  dest: "build/d3-foo.js"
};