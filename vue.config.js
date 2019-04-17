const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: undefined,

  //  outputDir: 'dist',
  //  assetsDir: '', 
  //保存时是不是用eslint-loader 来lint 代码
  lintOnSave: undefined,

  //  compiler: false,
  transpileDependencies: [ /* string or regex */ ],

  productionSourceMap: false,
  parallel: undefined,

  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },

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
    // config.resolve.alias
    //   .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    //   .set('_c', resolve('src/components'))
    //   .set('_conf', resolve('config'))
    //   .set('vue$', 'vue/dist/vue.esm.js')
    //   .set('@components', resolve('src/components'))

     
  },

  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json', ".css"],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    }
  },

  // 三方插件的选项
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  pluginOptions: {
    // ...
  },

  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true
}

 