var path = require("path");
var webpack = require("webpack");
var htmpWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:path.join(__dirname,"./src/app.js"),
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bunlde.js"
    },
    module:{
        rules: [
            {
                test:/\.jsx?$/,
                loader:"babel-loader",
                exclude: /nod_modules/
            }
            
          ]
    },
    plugins:[
        new htmpWebpackPlugin({
            template:path.join(__dirname,"./src/index.html")
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        inline:true
    }
}