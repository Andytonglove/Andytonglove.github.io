---
title: 我的第一篇博客-搭建blog
categories: blog
tags: blog
comments: false
---
一直都很想搭建一个自己的博客，这几天刚好有时间，就花了几个小时借助[Hexo](https://hexo.io/)和[GitHub Pages](https://pages.github.com/)简单地搭建了一个自己的博客，可以说是非常简单好用。本文主要讲一下博客搭建的过程和搭建过程中踩的雷，希望能有参考价值。今后如果有时间也会自己在博客上写一些有关生活、思考和代码的东西，期待能够一直更新下去。

## 博客搭建过程

### 博客搭建前期准备

1. `Node.js`，在之前我已经因为小程序和前端需要进行过相关nvm、npm和nodejs系列配置，故这里不再赘述。
2. `Git`，这里搭建建议是配置Github上的SSH密钥的，也可以配置一下淘宝源或者其他，很久之前就配置过了，同上不再赘述。

### 博客整体骨架结构搭建——Hexo

1. `npm install -g hexo-cli`安装Hexo相关脚手架，方便后续工作。可用`hexo -v`检查一下。
2. 创建一个blog文件夹，用以存放博客相关文件，作为后续`git bash`的工作文件夹。
3. 在文件夹中`hexo init`初始化博客基本框架，随后`npm install`配置一下node，这里基本完成本地搭建操作。
4. 运行下述命令：
    ``` bash
    $ hexo g # 加载hexo基础文件，生成静态网页
    $ hexo s # 创建一个服务器，本地预览效果
    $ hexo d # 用以部署到远端github上
    ```
5. 在本地浏览器查看 http://localhost:4000/ 界面，会看到hexo欢迎页，这里可以看到已经在本地创建成功了。最后部署到远端的命令则需要先完成下面的步骤。
6. 关于博客主题，这里可以去Github或者是B站上搜索hexo theme，根据各自的参考文档说明进行安装即可。这里我使用的是 **[fluid](https://github.com/fluid-dev/hexo-theme-fluid)** 主题，有其个性化配置操作。

### 将博客部署到远端上——GitHub Pages

1. 在Github上新建一个个人仓库，仓库名设置为`username.github.io`，这里username是自己的github用户名。至于readme初始化必要性不大，这里在创建后也可以直接在仓库设置里面选择主题。

2. 远程仓库准备完毕，现在需要在blog文件夹根目录下的`_config.yml`文件中配置自己的远程仓库地址，具体如下：
    ``` text
    deploy:
        type: git
        repository: 远程仓库SSH地址
        branch: master
    ```

3. 文件夹下git bash运行`npm i hexo-deployer-git`，安装部署脚手架，然后就可以用`hexo new post "article title"`命令创建新的博客文章了。随后还是按上面的命令三件套更新发布文章。注意，这里每次无论`hexo g`或`hexo s`，都最好先使用`hexo clean`清除本地缓存。

4. 剩余的其他设置还在摸索中，这里可以在`_config.yml`中修改大部分的配置……其实在[Hexo参考文档](https://hexo.io/zh-cn/docs)里写的都挺清楚的，剩下的就不再赘述了。主题配置见[Fluid配置手册](https://hexo.fluid-dev.com/docs/guide/)。

