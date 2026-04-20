const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;
const mainRoot = '/mnt/c/Users/Markw/Documents/Development Projects/Dungeon Scribe AI 1.1';

const config = getDefaultConfig(projectRoot);

// Worktree setup: resolve modules from main project's node_modules directly.
// watchFolders intentionally omitted — Metro can't watch /mnt/c/ via inotify.
config.resolver.nodeModulesPaths = [path.join(mainRoot, 'node_modules')];

module.exports = withNativeWind(config, { input: './global.css' });
