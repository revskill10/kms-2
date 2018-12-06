module.exports = {
  //useFileSystemPublicRoutes: false,
  assetPrefix: '/blog', // affects page bundles and app/commons/vendor scripts
  webpack: (config) => {
    config.output.publicPath = `/blog${config.output.publicPath}`;
    return config;
  },
};
