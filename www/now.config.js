const buildTypes = [
  "@now/next",
]
const builds = [
  {
    src: "next.config.js", use: buildTypes[0]
  }
]

const nextRoutes = ['/about'].map(function(item, index) {
  return {
    src: item,
    dest: item,
    build: buildTypes[0],
  }
})

const deployConfig = {
  version: 2,
  name: "next-routes-middleware",
  public: true,
  alias: "next-routes-middleware"
}

const routes = [
  ...nextRoutes,
  { src: "/", dest: "/index", build: buildTypes[0], }
]

module.exports = {
  ...deployConfig,
  builds,
  routes,
}