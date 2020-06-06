const {nodeResolve} = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");
const builtins = require("rollup-plugin-node-builtins");
const {terser} = require("rollup-plugin-terser");

module.exports = {
	input: "index.js",
	output: {
		file: "linter.js",
		format: "umd",
		exports: "named",
		name: "eslint",
	},
	plugins: [
		json(),
		builtins(),
		nodeResolve({
			preferBuiltins: false
		}),
		terser(),
	],
};
