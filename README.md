# 快应用

## 1、文件结构

```
├── sign                # 存储 rpk 包签名模块;
│   ├── debug           # 调试环境证书/私钥文件
│   └── release         # 正式环境证书/私钥文件
└── src
│   ├── common          # 公用的资源(images/styles/字体/组件...)
│   │   ├──images       # 存储 png/jpg/svg 等公共图片资源
│   │   └──components   # 存放 公共组件
│   ├── data.js         # 存放静态数据
│   ├── app.ux          # 应用程序代码的人口文件
│   ├── manifest.json   # 配置快应用基本信息
└── package.json        # 定义项目需要的各种模块及配置信息
```

## 2、如果需要轻粒子统计功能服务

首先需要前往轻离子官网注册, 在创建应用之后可以获得app_key，
然后需要在 ``news-template/src/assets/js/statistics.config.js`` 文件中配置好自己的app_key。

## 3、说明

本项目为快应用。

`home`页面：
- 首页

`video`页面：
- 视频页，图文新闻点击可进入`detail`详情页面

`collect`页面：
- 收藏书架及网址页

`user`页面：
- 个人中心

`detail`页面：
- 新闻详情

`login`页面：
- 登陆/注册页，点击确定按键，进入`user`页面


## 4、如何使用

### 4.1 快应用开发工具调试
推荐下载[快应用开发工具](https://www.quickapp.cn/docCenter/post/95)，可以进行扫码调试/usb调试，还有web预览、语法提示等功能。使用方法，请参见[快应用开发工具文档](https://doc.quickapp.cn/tutorial/ide/overview.html)。

### 4.2 命令行调试
```bash
cd news-template && npm start

# 或者运行以下命令
npm server & npm watch

# 或者在终端一 Tab 下运行：
npm server

# 在终端另一 Tab 下运行：
npm watch

用一台 `Android` 手机，下载安装[「快应用」调试器](https://www.quickapp.cn/docCenter/post/69)，打开后操作`扫码安装`，扫描如上命令生成的二维码，即可看到效果；更多讯息，请参见[快应用环境搭建](https://nice.lovejade.cn/zh/article/develop-quick-app-experience-notes.html#环境搭建)。
