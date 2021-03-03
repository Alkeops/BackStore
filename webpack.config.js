const path = require("path");
const nodeExternals = require("webpack-node-externals");
const srcPath = (subDir) => path.join(__dirname, "src", subDir);

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@controllers": srcPath("controllers"),
      "@routes": srcPath("routes"),
      "@services": srcPath("services"),
      "@interfaces": srcPath("ts/interfaces"),
      "@middlewares": srcPath("middlewares"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
