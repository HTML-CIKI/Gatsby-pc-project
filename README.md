## 用gatsby.js 搭建PC端静态项目结构

### 安装 

> 1、全局安装

```sh
    npm install -g gatsby-cli
```

> 2、创建项目

```bash
    gatsby new my-default-starter
```

> 3、启动项目

```sh
    cd my-default-starter/
    gatsby develop
```

> 3、打包

```sh
    cd my-default-starter/
    gatsby build
```
### 项目结构说明

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

### 注意事项

> 1、pages目录下不允许放除了js page主文件以外的其他文件

  比如我们在react中我们经常将页面的一些事件处理函数放到一个独立的handler.js文件中，然后再在组件中导入，但是在Gastsby中pages目录下每一个js文件都会被当作一个page来处理，所以会导致最终无法构建生产版本。

  解决办法：将handler.js文件移出pages目录或者将处理函数写到js page主文件中.

> 2、pages目录下的js page主文件, 导出时都需要导出default，不然会无法构建生产版本。

```sh
    export default Home;
```

> 3、组件中不能定义空的propTypes.比如：

```sh
    Home.propTypes = {};
```

  上面的写法是不卑允许的，会导致最终无法构建生产版本
  解决办法：删除空的propTypes

> 4、前端路由问题，Gastsby默认使用react-router, url必须和filesystem一一对应，这样不太灵活，我们可以通过重写创建pages时page的无力路径来解决

解决办法：在gatsby-node.js中添加以下配置：

```sh
    exports.onCreatePage = ({ page, boundActionCreators }) => {
        const { createPage, deletePage } = boundActionCreators;
        return new Promise(resolve => {
            const oldPage = Object.assign({}, page);
    
            // 匹配路径末尾的/和其后面的文件名
            // 比如：/pc/about/ ==> 匹配到 about/, RegExp.$1的值为about
            // 期望输入的文件名为：about.html
            const reg = /([^\/]+)\/?$/;
            if (reg.test(page.path)) {
                page.path = `${RegExp.$1}.html`;
    
                deletePage(oldPage);
                createPage(page);
            }
    
            resolve();
        });
    };
```

> 5、每次部署后, 必须要强制刷新才能访问. 不然会出现js报错.导致这个问题的原因是由于js缓存导致的问题。

  解决办法：在gatsby-node.js中, 修改webpack的配置, 加上时间戳作为chunk文件的文件名.

```sh
    const path = require('path');
    exports.modifyWebpackConfig = ({ config, stage }) => {
        if (stage === 'build-javascript') {
            const timestamp = Date.now();
    
            config.merge({
                devtool: false,
                output: {
                    filename: `name-${timestamp}-[chunkhash].js`,
                    chunkFilename: `name-${timestamp}-[chunkhash].js`
                }
            });
        }
    
        return config;
    };
```

> 6、开发时, boundle文件默认是放到了内存中, 而没有生成到文件系统中，所以无法使用fiddler等代理工具来代理到具体环境调试.

  解决办法：在gatsby-node.js中, 修改webpack的配置, 导入WriteFilePlugin组件.

  ```sh
    const path = require('path');
    
    exports.modifyWebpackConfig = ({ config, stage }) => {
        const isDevelopment = stage === 'develop' || stage === 'develop-html';
    
        if (isDevelopment) {
            config.merge({
                output: {
                    path: path.join(__dirname, './public/assets')
                }
            });
    
            config.plugin('WriteFilePlugin', WriteFilePlugin);
        }
    
        return config;
    };
  ```

> 7、安装sass 决解办法：在gatsby-config.js中, 新增如下配置:

```sh
    module.exports = {
      patgPrefix: '/prod-assets/app/my-project',
  
      plugins: [
          'gatsby-plugin-sass',
          'gatsby-plugin-purify-css',
      ]
    };
```

> 8、编译时将px自动转换为rem。

解决办法：

先安装sass-rem包.创建一个rem.scss的公共样式文件, 内容如下: 48 = 1920/40（请按照实际的设计稿做调整）

```sh
@import '~sass-rem';
  
  $rem-baseline: 48px;
  html {
      @include $rem-baseline;
  }
```

在需要使用的地方导入我们刚才定义的rem.scss文件，然后尽情的使用rem方法.

```sh
    @import '../common/styles/rem';
    .box {
        height: rem(40px);
        line-height: rem(40px);
        font-size: rem(32px);
    }
```


> 9、对于只在浏览器中执行的异步请求, 需要写到componentDidMount中. componentDidMount生命周期函数, 只在浏览器环境中才会执行.

> 10、如果在build时需要请求服务器接口获取数据来渲染页面. 请求的地址需要是绝对地址, 并且要判断是否为node环境. 否则该逻辑也会在浏览器环境中执行.

> 11、在代码中, 不能执行使用window, document等browser上才有的对象, 如果要使用, 需要先判断当前的环境是否为browser环境.

> 12、接口请求避免使用fetch方法，采用xhr来发起请求，fetch方法在手机端发起请求时不会带上cookie，会导致一些状态比如登录状态不同步

> 13、如果在开发中需要在每一次修改代码后编译完成时获得一个通知，可以添加WebpackNotifierPlugin。

解决办法：

在gatsby-node.js中, 修改webpack的配置, 导入WebpackNotifierPlugin组件.

```sh
    exports.modifyWebpackConfig = ({ config, stage }) => {
        const isDevelopment = stage === 'develop' || stage === 'develop-html';
    
        if (isDevelopment) {
            config.plugin('WebpackNotifierPlugin', WebpackNotifierPlugin);
        }
    
        return config;
    };
```

> 14、scss中自动加浏览器前缀，这个就是加入postcss了。

在gatsby-node.js中, 修改webpack的配置, 导入postcss-loader.

```sh
    exports.modifyWebpackConfig = ({ config, stage }) => {
        // 添加postcss.
        config.loader('scss', {
            test: /\.s?css$/,
            loader: 'postcss-loader'
        });
    
        return config;
    };
```