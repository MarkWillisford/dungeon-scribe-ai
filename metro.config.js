const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// When running from a git worktree whose node_modules live in the main repo,
// set METRO_MAIN_ROOT to the main project directory. No effect if unset.
if (process.env.METRO_MAIN_ROOT) {
  config.resolver.nodeModulesPaths = [path.join(process.env.METRO_MAIN_ROOT, 'node_modules')];
}

module.exports = withNativeWind(config, { input: './global.css' });
