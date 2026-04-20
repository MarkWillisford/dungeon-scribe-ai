const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;
const mainRoot = '/mnt/c/Users/Markw/Documents/Development Projects/Dungeon Scribe AI 1.1';

const config = getDefaultConfig(projectRoot);

// Worktree setup: node_modules live in the main project root, not here.
// Tell Metro to watch that folder and resolve modules from it.
config.watchFolders = [mainRoot];
config.resolver.nodeModulesPaths = [path.join(mainRoot, 'node_modules')];

module.exports = withNativeWind(config, { input: './global.css' });
