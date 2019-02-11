/**
 * Docs
 * - https://github.com/storybooks/storybook/tree/master/addons/storysource#getting-started
 */
module.exports = function(baseConfig, env, defaultConfig) {
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    exclude: /node_modules/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  return defaultConfig
}
