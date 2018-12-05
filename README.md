## 用gatsby.js 搭建PC端静态项目结构

### 安装 

> 1、全局安装

```sh
    npm install -g gatsby-cli
```

> 2、下载项目

```bash
    git clone https://github.com/HTML-CIKI/Gatsby-pc-project.git
```
> 3、安装依赖
    ```sh
        yarn 或 npm install
    ```

> 4、启动项目

```sh
    cd Gatsby-pc-project/
    yarn start
```

> 3、打包

```sh
    cd Gatsby-pc-project/
    yarn build
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
