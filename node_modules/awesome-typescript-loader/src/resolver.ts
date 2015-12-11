// This file serves as a hacky workaround for the lack of "resolveSync" support in webpack.
// We make our own resolver using a sync file system but using the same plugins & options
// that webpack does.

// Implementation was additionaly introduces in `ts-loader`
// https://github.com/TypeStrong/ts-loader/blob/v0.7.1/resolver.ts
// Copies with some minor codestyle changes.

let Resolver = require("enhanced-resolve/lib/Resolver");
let SyncNodeJsInputFileSystem = require("enhanced-resolve/lib/SyncNodeJsInputFileSystem");
let CachedInputFileSystem = require("enhanced-resolve/lib/CachedInputFileSystem");
let UnsafeCachePlugin = require("enhanced-resolve/lib/UnsafeCachePlugin");
let ModulesInDirectoriesPlugin = require("enhanced-resolve/lib/ModulesInDirectoriesPlugin");
let ModulesInRootPlugin = require("enhanced-resolve/lib/ModulesInRootPlugin");
let ModuleAsFilePlugin = require("enhanced-resolve/lib/ModuleAsFilePlugin");
let ModuleAsDirectoryPlugin = require("enhanced-resolve/lib/ModuleAsDirectoryPlugin");
let ModuleAliasPlugin = require("enhanced-resolve/lib/ModuleAliasPlugin");
let DirectoryDefaultFilePlugin = require("enhanced-resolve/lib/DirectoryDefaultFilePlugin");
let DirectoryDescriptionFilePlugin = require("enhanced-resolve/lib/DirectoryDescriptionFilePlugin");
let DirectoryDescriptionFileFieldAliasPlugin = require("enhanced-resolve/lib/DirectoryDescriptionFileFieldAliasPlugin");
let FileAppendPlugin = require("enhanced-resolve/lib/FileAppendPlugin");
let ResultSymlinkPlugin = require("enhanced-resolve/lib/ResultSymlinkPlugin");

function makeRootPlugin(name, root) {
	if (typeof root === "string") {
		return new ModulesInRootPlugin(name, root);
	} else if(Array.isArray(root)) {
		return function() {
			root.forEach(function(root) {
				this.apply(new ModulesInRootPlugin(name, root));
			}, this);
		};
	}
	return function() {};
}

function makeResolver(options) {
	let fileSystem = new CachedInputFileSystem(new SyncNodeJsInputFileSystem(), 60000);

    let resolver = new Resolver(fileSystem);

	// apply the same plugins that webpack does, see webpack/lib/WebpackOptionsApply.js
	resolver.apply(
		new UnsafeCachePlugin(options.resolve.unsafeCache),
		options.resolve.packageAlias ? new DirectoryDescriptionFileFieldAliasPlugin("package.json", options.resolve.packageAlias) : function() {},
		new ModuleAliasPlugin(options.resolve.alias),
		makeRootPlugin("module", options.resolve.root),
		new ModulesInDirectoriesPlugin("module", options.resolve.modulesDirectories),
		makeRootPlugin("module", options.resolve.fallback),
		new ModuleAsFilePlugin("module"),
		new ModuleAsDirectoryPlugin("module"),
		new DirectoryDescriptionFilePlugin("package.json", options.resolve.packageMains),
		new DirectoryDefaultFilePlugin(["index"]),
		new FileAppendPlugin(options.resolve.extensions),
		new ResultSymlinkPlugin()
	);

	return resolver;
}

export default makeResolver;
