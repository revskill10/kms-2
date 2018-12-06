module.exports = {
  assetPrefix: '/home',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push(
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    )
    config.output.publicPath = `/home${config.output.publicPath}`;

    return config
  }
};
