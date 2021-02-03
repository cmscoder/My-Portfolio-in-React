const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, (env) => {
  const isProduction = env === "production";

  return {
    mode: "development",
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: "./dist",
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
});
