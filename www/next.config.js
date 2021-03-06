module.exports = {
  //assetPrefix: '/www',
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
    config.output.publicPath = `/www${config.output.publicPath}`;

    return config
  }
};
