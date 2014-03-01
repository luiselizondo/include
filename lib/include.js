var path = require("path");

/** 
 * Main function
 * Require a file using the structure of modules/{moduleName}/{type}/file
 * Usually to load controllers or models, if no file provided, then index.js will
 * be loaded. No need to add .js
 */
function include(module, type, file) {
	var root = path.dirname(require.main.filename);

	if(file) {
		return require(path.join(root,  "modules", module, type, file));
	}
	else {
		return require(path.join(root,  "modules", module, type, "index"));
	}
}

module.exports = exports = include;

/** 
 * Load a controller inside a module 
 */
exports.controller = function(module) {
	return include(module, "controllers");
}

/** 
 * Load the index.js model file inside a module
 */
exports.model = function(module) {
	return include(module, "models");
}

/** 
 * Load a file on the root of the directory 
 */
exports.root = function(file) {
	var root = path.dirname(require.main.filename);
	return require(path.join(root, file));
}

/** 
 * Load app.js file in the root directory 
 */
exports.app = function() {
	var root = path.dirname(require.main.filename);

	return require(path.join(root, "app"));
}

/** 
 * Load a file inside the lib directory
 */
exports.lib = function(file) {
	var root = path.dirname(require.main.filename);
	return require(path.join(root, "lib", file));
}

/** 
 * Load a file given a directory and a file 
 */
exports.path = function(dir, file) {
	var root = path.dirname(require.main.filename);
	return require(path.join(root, dir, file));
}