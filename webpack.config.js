module.exports = {
    entry: './public/javascripts/ng-app.js',
    output: {
        path: path.join(__dirname, './public/dist/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};