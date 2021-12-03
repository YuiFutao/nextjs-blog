module.exports = {
  reactStrictMode: true,

  // Hot Reloading有効化
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },
}
