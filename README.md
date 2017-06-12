### koa2 vue-cli gulp webpack

* 目的实现前后端分离状态下，node端，vue-cli纯前端也能同时实时开发预览效果，联调

* 整体使用 koa-generator生成的
* front 文件夹是vue-cli脚手架工具生成的
* 可以分开启动koa后端以及front文件夹下的vue-cli前端开发
* 路由方面同时包括koa服务端路由以及vue-route前端路由

* gulpfile.js文件包括 vue项目的实时监测打包，koa服务端文件的实时监测重启服务器