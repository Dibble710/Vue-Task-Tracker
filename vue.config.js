module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://617c214f6aa7510007f8ff23--dibble-tasktracker-vue.netlify.app/",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
