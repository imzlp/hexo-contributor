### USAGE

站点`_config.yml`配置：

```yml
hexo_contributor:
  image_size: 70px
  default_avatar: https://img.imzlp.com/imgs/zlp/picgo/2021/default-author-image.png
  font_icon_color: 555
  font_color: 009bf5
  font_weight: 500
  github_avatar: true
```

使用方法：

```config
{% authortables %}
name:lipengzha github:hxhb email:hi@imzlp.com avatar:https://img.imzlp.com/imgs/zlp/picgo/2021/default-author-image.png zhihu:https://www.zhihu.com/follow wechat:https://imzlp.com/images/wechat-qrcode-offical.webp
name:imzlp github:imzlp site:https://imzlp.com email:hi@imzlp.com zhihu:https://www.zhihu.com/follow wechat:https://imzlp.com/images/wechat-qrcode-offical.webp
{% endauthortables %}
```