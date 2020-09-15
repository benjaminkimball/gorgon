const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/react"],
  async webpackFinal(config) {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));

    return config;
  },
};
