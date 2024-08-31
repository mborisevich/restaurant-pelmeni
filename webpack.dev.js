const {merge} = require("webpack-merge");
const common= require("./webpack.common.js")
module.exports = merge(common, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ['./src/template.html']
    },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset/resource'
        }
    ]
  },
});