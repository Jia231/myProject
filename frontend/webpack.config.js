var path = require("path")

module.exports = {
    entry:["./src/index.tsx"],
    output:{
        path:path.join(__dirname,"build/dist"),
        filename:"bundle.js"
    },
    resolve:{
        extensions:[".tsx",".ts",".js"]
    },
    module: {
        rules: [
          {
            test: /\.tsx$/,
            loader: "ts-loader",
            exclude: /node_modules/
          }
        ]
    }
}



/* module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
    
    
    
    
        module:{
        loaders:[
            {
                test:/\.tsx?$/,
                loader:"ts-loader",
                exclude:/node_modules/
            }
        ]*/