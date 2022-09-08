// Fluid 注入代码
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.head.raw('default', '<script src="https://andytonglove.github.io/live2d-widget/autoload.js"></script>');
});