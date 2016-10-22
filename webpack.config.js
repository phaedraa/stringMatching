module.exports = {
  entry: "./entry.jsx",
  output: {
    path: "./public",
    filename: "bundle.js"
  },
  {
    "plugins": ["transform-react-jsx"]
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { 
        test: /\.jsx?$/,    // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: "babel",
        query:
          {
            presets:['react']
          }
      },
      { test: /\.js.*/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['react'] } },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};