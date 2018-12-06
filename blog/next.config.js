const { NOW_URL } = process.env
const { alias } = require('./now.json')
module.exports = {
  //useFileSystemPublicRoutes: false,
  assetPrefix: NOW_URL ? `https://${alias}` : 'http://localhost:3000',  
};
