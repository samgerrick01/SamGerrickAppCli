module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@shared': './src/shared',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@themes': './src/themes',
          '@providers': './src/providers',
          '@graphql': './src/graphql',
          '@mobx': './src/mobx',
          '@context': './src/context',
          '@customhooks': './src/customhooks',
        },
      },
    ],
  ],
};
