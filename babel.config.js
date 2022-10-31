module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '~': './src',
            'components': './src/components',
            'constants': './src/constants',
            'navigation': './src/navigation',
            'screens': './src/screens',
            'store': './src/store',
            'utils': './src/utils'
          }
        }
      ]
    ],
    presets: ['babel-preset-expo'],
  };
};
