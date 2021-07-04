### USAGE

站点`_config.yml`配置：

```yml
hexo_contributor:
  margin_rule: unset
  board_width: 120px
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
name:lipengzha,github:hxhb,site:https://imzlp.com/,email:hi@imzlp.com,avatar:https://img.imzlp.com/imgs/zlp/picgo/2021/avatar.png,zhihu:https://www.zhihu.com/people/imzlp,wechat:https://imzlp.com/images/wechat-qrcode-offical.webp
name:Epic Games,github:EpicGames,site:https://unrealengine.com/,avatar:https://img.imzlp.com/imgs/zlp/picgo/2021/uelogo.png
name:Tencent,github:Tencent,site:https://opensource.tencent.com/
{% endauthortables %}
```