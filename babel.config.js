module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  const plugins = [
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ];

  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets,
    plugins,
  };
};
