module.exports = {
  //useFileSystemPublicRoutes: false,
  assetPrefix: '/blog',  
  webpack: config => {
    config.output.publicPath = `/blog${config.output.publicPath}`;

    return config
  }
};
