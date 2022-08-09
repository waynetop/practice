/*
 * @Author: wayne 13810981+wgwaige@users.noreply.github.com
 * @Date: 2022-08-09 10:03:57
 * @LastEditors: wayne 13810981+wgwaige@users.noreply.github.com
 * @LastEditTime: 2022-08-09 10:07:49
 * @FilePath: /practice/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path');
const webpack = require('webpack');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, dir);
}
const port = process.env.port || 9527; // dev port
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  // lintOnSave: 'error',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js'),
    proxy: {
      '/api': {
        target: 'http://demo.mtiny.cn:30080',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'joai-Vant',
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      }),
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json')
      })
      // 将 dll 注入到 生成的 html 模板中
      // new AddAssetHtmlPlugin({
      //   // dll文件位置
      //   filepath: path.resolve(__dirname, './public/vendor/*.js'),
      //   // dll 引用路径
      //   publicPath: './vendor',
      //   // dll最终输出的目录
      //   outputPath: './vendor'
      // })
    ]
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "./src/styles/var.less";`
          }
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5, // 结果为：设计稿元素尺寸/37.5，比如元素宽375px,最终页面会换算成 10rem
            propList: ['*'] // 是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
            // unitPrecision: 5, //保留rem小数点多少位
            // selectorBlackList: ['.radius'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
            // replace: true, //这个真不知到干嘛用的。有知道的告诉我一下
            // mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
            // minPixelValue: 12, //px小于12的不会被转换
          })
        ]
      }
    }
  }
};
