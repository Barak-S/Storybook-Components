const path = require('path');
const appPath = path.resolve(__dirname, '../src');

module.exports = {
  stories: ['../**/story.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-actions', '@storybook/addon-knobs', '@storybook/addon-a11y'],
  webpackFinal: async config => {
    config.resolve = {
      alias: {
        assets: `${appPath}/assets`,
        components: `${appPath}/components`,
        core: `${appPath}/core`,
        screens: `${appPath}/screens`,
        scenes: `${appPath}/scenes`,
        styles: `${appPath}/styles`,
        utils: `${appPath}/utils`,
      },
      extensions: ['.js', '.ts', '.tsx'],
    };
    return config;
  },
};
