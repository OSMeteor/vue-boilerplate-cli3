const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // index: {
  //   // 入口文件
  //   entry: './src/main.js',
  //   // 模版文件
  //   template: 'public/index.html',
  //   // 输出文件名
  //   filename: 'index.html'
  // },
   baseUrl: '/',
  //  outputDir: 'dist',
  //  assetsDir: '', 
   lintOnSave: false, //保存时是不是用eslint-loader 来lint 代码
  //  compiler: false,
   transpileDependencies: [ /* string or regex */ ],
   productionSourceMap: true,
  parallel: require('os').cpus().length > 1,
  chainWebpack: (config) => { 
    // config
    //   // Interact with entry points
    //   .entry('index')
    //   .add('src/main.js')
    //   .end()
      // Modify output settings
      // .output
      // .path('dist')
      // .filename('[name].bundle.js');
    //  config
    //    // Interact with entry points
    //    .entry('index')
    //    .add('src/main.js')
    //    .end()
    //    // Modify output settings
    //    .output
    //    .path('dist')
    //    .filename('[name].js');
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@components', resolve('src/components'))
  },
  configureWebpack: (config) => {
   
     if (process.env.NODE_ENV === 'production') {
       // 为生产环境修改配置...
     } else {
       // 为开发环境修改配置...
     }

  },
  css: { // 配置css模块
    extract: true,
    sourceMap: false,
    modules: false,
    //  pwa: {},
    loaderOptions: { // 向预处理器 Loader 传递配置选项
      less: { // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },
   // 三方插件的选项
  pluginOptions: {
    // ...
  }
}

 