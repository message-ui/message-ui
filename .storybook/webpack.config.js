const path = require('path');

// load the default config generator.
module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../src/')
    }
  );
  return config
}