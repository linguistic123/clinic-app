const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            '@primary-color': '#1b5e20',
            '@layout-header-background': '#ffffff',
            '@layout-header-padding': '0 20px',
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
