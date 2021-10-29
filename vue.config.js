module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://dibble-tasktracker-vue.netlify.app",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
