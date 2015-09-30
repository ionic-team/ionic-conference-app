module.exports = {
  entry: [
    "zone.js",
    "traceur-runtime",
    "reflect-metadata",
    "rtts_assert/rtts_assert",
    "angular2/angular2",
    "ionic/ionic",
    "web-animations.min",
    "./www/app/app.js",
    "moment"
  ],
  output: {
    path: __dirname + "/www",
    filename: "build/js/app.bundle.js",
    //pathinfo: true // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "awesome-typescript-loader?doTypeCheck=false&useBabel=true&useWebpackText=true",
        include: /www\/app\//,
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
        include: /www\/app\//,
        exclude: /node_modules/
       }
    ]
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      "node_modules/ionic-framework/src/es5/common", // ionic-framework npm package (stable)
      "node_modules/ionic-framework/node_modules", // angular is a dependency of ionic
      "node_modules/ionic-framework/js", // for web-animations polyfill
      "node_modules/moment" // for web-animations polyfill

     // "node_modules/ionic2/dist/src/es5/common", // driftyco/ionic2 repo (master)
     // "node_modules/ionic2/node_modules",
     // "node_modules/ionic2/dist/js"
    ],
    extensions: ["", ".js", ".ts"]
  }
};
