'use strict'
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = 'ZZL。。。' // page title
const port = 5050
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    devServer: {
      port:port,
      open:true,
      overlay:{
        warnings:false,
        errors:false
      },
      proxy: {
          '/api': {
              target: 'http://doubleinsevenday.webhop.me:1573',//后端接口地址
              changeOrigin: true,
              pathRewrite: {
                '^/api/': ''
              }
          }
      },
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
    },
    css: {
        extract: process.env.NODE_ENV === 'production' ? {
          ignoreOrder: true
        } : false,
        requireModuleExtension: true,
        sourceMap: true,
        loaderOptions: {
          sass: {
            /* sass-loader 8.0语法 */
            prependData: '@import "~@/styles/variables.scss";'
    
            /* sass-loader 9.0写法，感谢github用户 shaonialife*/
            // additionalData(content, loaderContext) {
            //   const { resourcePath, rootContext } = loaderContext
            //   const relativePath = path.relative(rootContext, resourcePath)
            //   if (
            //     relativePath.replace(/\\/g, '/') !== 'src/styles/variables.scss'
            //   ) {
            //     return '@import "~@/styles/variables.scss";' + content
            //   }
            //   return content
            // },
          }
        }
      }
}
