# vux.mobile

## 技术栈：vue2 + vux + vue-router + vuex + es6/7 + less + stylus (stylus与less均可)

## 项目目录

```
--vue2-start
 --src      源码目前
   --api    webapi请求
   --apps   页面
    --components 业务组件
    --plugin  组件注册
    --views   路由页面
   --config 配置及通用脚本
   --router 路由配置
   --store  store
   --style  样式文件
 --static   静态资源
 --dist   编译目录，可直接部署在iis/nginx
 --build    运行环境脚本及编译脚本
 --config   运行配置
 ```

## 运行环境

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
