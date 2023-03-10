var webpack = require('webpack')
const path = require('path')


module.exports = {
  mode: 'development',
  entry:'./scr/app_vue/main.js',
  output: {
    path:path.resolve(__dirname, "scr/public/controladores"),
    filename: 'bundle.js'
  },
  module: {
    rules: [

      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use:{loader:'vue-loader'}
      }
    ]



  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
   
 /*
  new webpack.DefinePlugin({
     'process.env': {
       NODE_ENV: '"development"'
     }
   })
    // ...
  
   new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })*/


  ]
}
