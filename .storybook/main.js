/*const path = require('path');
const Inspect = require('vite-plugin-inspect');
const Unocss = require('unocss/vite');

module.exports = {
  "stories": [
    "../src.stories.(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    config.resolve.alias['~'] = `${path.resolve(__dirname, 'src')}/`;
    config.plugins.push(Unocss.default());
    config.plugins.push(Inspect());
    return config;
  }
}
*/
const Unocss = require('unocss/vite');
const Inspect = require('vite-plugin-inspect');

module.exports = {
  framework: '@storybook/react',
  stories: ['../src/**/*stories.(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: false,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins.push(Unocss.default());
    config.plugins.push(Inspect());
    return config;
  },
};