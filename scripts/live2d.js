// Hexo 注入代码
hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css">', 'default');
// Fluid 注入代码
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.head.raw('default', '<script src="https://andytonglove.github.io/live2d-widget/autoload.js"></script>');
});