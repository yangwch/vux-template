# vux.mobile

## 技术栈：vue2 + vue-router + vuex + es6/7 + vux + less + stylus (stylus与less均可)

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
# 安装依赖包
npm install

# 启动本地开发服务 localhost:8080
npm run dev

# 发布到dist
npm run build

# 
# 先用HBuilder打开项目目录，运行
npm run app


# 发布到dist，分析报告
npm run build --report
```

## 真机调试，配合HBuilder

``` bash
# 使用Hbuilder打开项目目录，打开命令行运行
npm run app

# 连接手机或移动设备；使用HBuilder，点击“运行” -> "真机运行" -> 【选择设备】

# 真机运行可能调试延迟在3秒以上，建议普通页面开发使用dev命令
# 发布版本先运行build命令，如果使用调度时生成的app.js（10Mb+），打包会大一些
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
