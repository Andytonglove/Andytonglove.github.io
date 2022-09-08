---
title: 博客live2d看板娘配置——fluid主题
date: 2022-09-08 20:58:30
categories: blog
tags: [blog, live2d, Hexo, fluid, Git]
comments: false
---
博客主体和评论区的搭建都完成了，感觉还是少了点什么，思来想去发现还差一个可爱的二次元看板娘，于是又给自己加了点折腾的活，没想到这个`live2d看板娘`并不是那么好做的，想要一个进阶版本的还是很折腾了一会儿的。本文即是记载折腾看板娘的过程，还有博客备份以及其他的一些杂七杂八的比如about-index的设置，希望能有所收获。
具体效果可见[本站](https://andytonglove.github.io/)左下角。😃

### 博客美化之看板娘

>参考：https://github.com/stevenjoezhang/live2d-widget
>相关参考：https://www.freesion.com/article/35391270847/

可爱的二次元看板娘美化当然是博客充满生气的不二之选，我这里因为用的是Hexo的fluid主题，所以两种看板娘方案我都进行了尝试，最后选择了较为复杂和丰富的一种，下详述。

1. `初级看板娘`：使用官方hexo-helper-live2d，方法简单但效果一般，包已经4年未维护，具体的model可以在[live2d-widget-models](https://github.com/xiazeyu/live2d-widget-models)中搜索并选择心仪的小姐姐安装。由于各种更新问题本人不太推荐这种方法。分别在bash和主题配置文件`_config.yml`中基本设置如下，具体其他设置其他博客详细说了，就不再赘述了：
    ``` bash
    npm install --save hexo-helper-live2d
    ```
    ``` text
    live2d:
        enable: true
    ```

2. `高级看板娘`：基本的都可以参考GitHub大神的[把萌萌哒的看板娘抱回家](https://github.com/stevenjoezhang/live2d-widget)说明。这里着重说一下主要的踩坑点和具体步骤如下：
    1. clone大神项目到本地博客目录的`themes/source`下，修改`autoload.js`文件，有基础看教程一看就懂，因人而异，我的具体改动为从上面改到下面：
        ``` js
        //const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";
        const live2d_path = "/live2d/";
        ```
    
    2. **`加入依赖和引入Fluid`**：不得不说这一步是最为特殊的，因为网上基本没有对fluid的看板娘美化，这里我们还是查阅[官方文档进阶用法](https://hexo.fluid-dev.com/docs/advance/#hexo-%E6%B3%A8%E5%85%A5%E4%BB%A3%E7%A0%81)，这里讲了Hexo和Fluid注入代码的方式，这里我就不再多说。在博客文件夹下新建scripts文件夹，新建js文件，直接上个人参考代码，js一看就懂：由此便可以把**必需**的依赖和live2d都注入到界面中。
        ``` js
        // Hexo 注入代码
        hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css">', 'default');
        // Fluid 注入代码
        hexo.extend.filter.register('theme_inject', function(injects) {
            injects.head.raw('default', '<script src="https://username.github.io/live2d-widget/autoload.js"></script>');
        });
        ```

    3. 依旧是如上修改主题文件，具体还想做其他看板娘大小、位置、格式、文本内容等的修改，可自行查看并修改 `waifu-tips.js` 、 `waifu-tips.json` 和 `waifu.css`。这里live2d因为是`jsdelivr`下的，由于众所周知的原因速度会有一些慢和玄学，也需要等资源的刷新，不过他人的cdn也挺好的，感谢。接下来就可以欣赏我们的小姐姐了！

### 博客备份

>参考：https://blog.csdn.net/qq_21040559/article/details/109702142

这里简而言之，`hexo d`上传部署到github的其实是hexo编译后的文件，即是在public文件夹内用来生成网页的，不包含源文件。这样如果换了主机就需要重新进行繁琐的主题配置。所以这里我们直接在原仓库里新开一个备份用分支，并设为默认以方便上传。随后我们将新分支clone下来并留下`.git`文件夹拷贝至blog总文件夹中，留存git信息，从而就可以重新执行一遍commit和push，完成备份。之后只需要clone下来并`npm install`需要的包即可。具体如下：
``` bash
$ git add .
$ git commit -m "backup"
$ git push origin backup
```

### Git小记

一如既往地遇见一些抽风问题并进行解决，首先是git push和clone时候的常规报错，先别急着去改SSH，看一下电脑梯子、代理或重启有时有奇效。