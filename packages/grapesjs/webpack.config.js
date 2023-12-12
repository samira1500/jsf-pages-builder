const CopyWebpackPlugin = require ('copy-webpack-plugin');
const path = require('path');
const rootDir = path.resolve(__dirname);

module.exports = ({ env = {}, config, pkg, webpack }) => {
  const { BUILD_MODULE } = process.env;

  return {
    ...config,
    mode: 'development',
    output: {
      ...config.output,
      path: path.resolve (__dirname, 'dist'),
      /*path: `${rootDir}/../../plugins/grapesjs-blocks-bootstrap5-test/public`,*/
      filename: BUILD_MODULE ? 'grapes.mjs' : 'grapes.min.js',
      ...(BUILD_MODULE ? {
        libraryTarget: 'module',
        library: { type: 'module' },
      } : {
        libraryExport: 'default'
      })
    },
    optimization: {
      ...config.optimization,
      minimize: !BUILD_MODULE,
    },
    devtool: 'source-map',
    devServer: {
      ...config.devServer,
      static: [rootDir],
      headers: { 'Access-Control-Allow-Origin': '*' },
      allowedHosts: 'all',
    },
    experiments: {
      outputModule: !!BUILD_MODULE,
    },
    resolve: {
      ...config.resolve,
      modules: [
        ...(config.resolve && config.resolve.modules),
        'src',
      ],
      alias: {
        ...(config.resolve && config.resolve.alias),
        jquery: `${rootDir}/src/utils/cash-dom`,
        backbone: `${rootDir}/../../node_modules/backbone`,
        underscore: `${rootDir}/../../node_modules/underscore`,
      }
    },
    plugins: [
      new webpack.DefinePlugin({ __GJS_VERSION__: `'${pkg.version}'` }),
      new CopyWebpackPlugin ({
        patterns: [
          { from: path.resolve (__dirname, 'dist', BUILD_MODULE ? 'grapes.mjs' : 'grapes.min.js'), to: path.resolve (rootDir, '../../apps/pages-builder/public', BUILD_MODULE ? 'grapes.mjs' : 'grapes.min.js') }, // copy to pages-builder
          { from: path.resolve (__dirname, 'dist', BUILD_MODULE ? 'grapes.mjs.map' : 'grapes.min.js.map'), to: path.resolve (rootDir, '../../apps/pages-builder/public', BUILD_MODULE ? 'grapes.mjs.map' : 'grapes.min.js.map') }, // copy to pages-builder
        ],
      }),
      ...config.plugins,
    ]
  }
};
