module.exports = {
  assetPrefix: '/blog', // affects page bundles and app/commons/vendor scripts
  webpack: (config) => {
    //config.output.publicPath = `/assets${config.output.publicPath}`;
    return config;
  },
};
