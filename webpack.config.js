// Note this only includes basic configuration for development mode.
// For a more comprehensive configuration check:
// https://github.com/fable-compiler/webpack-config-template

var path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/Fable.React.TransitionGroup.Sample.fsproj",
    output: {
        path: path.join(__dirname, "./docs"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./docs",
        port: 8080,
    },
    module: {
        rules: [{
            test: /\.fs(x|proj)?$/,
            use: "fable-loader"
        }]
    }
}