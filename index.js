hexo.extend.tag.register('authortables', function (args, content) {
    let default_image = ""
    let image_size = "80px"
    let font_icon_color = "555"
    let font_color = "009bf5"
    let font_weight = 500
    let github_avatar = true
    if(!(hexo.config.hexo_contributor === undefined))
    {
        if(!(hexo.config.hexo_contributor.default_image === null))
          default_image = hexo.config.hexo_contributor.default_image;
        if(!(hexo.config.hexo_contributor.image_size === null))
            image_size = hexo.config.hexo_contributor.image_size;
        if(!(hexo.config.hexo_contributor.font_icon_color === null))
            font_icon_color = hexo.config.hexo_contributor.font_icon_color;
        if(!(hexo.config.hexo_contributor.font_color === null))
            font_color = hexo.config.hexo_contributor.font_color;
        if(!(hexo.config.hexo_contributor.font_weight === null))
            font_weight = hexo.config.hexo_contributor.font_weight;
        if(!(hexo.config.hexo_contributor.github_avatar === null))
            github_avatar = hexo.config.hexo_contributor.github_avatar;
    }
    let iframes="<table>\n<tr>\n";
    content.split("\n").map((author_arg,i)=>{
        const argsObj = {}
        let author_args = author_arg.split(' ');
        // console.log(author_args)
        author_args.forEach((arg)=>{
            let currentTag = arg.split(':');
            let TagName = currentTag[0]
            let TagValue = "";
            for(var index=1;index<currentTag.length;index++)
            {
                if(!(TagValue === ""))
                    TagValue+=":";
                TagValue += currentTag[index];
            }
            argsObj[TagName] = TagValue;
            // console.log(TagName);
            // console.log(TagValue);
        });
        var authorName = argsObj.name === undefined ? "" : argsObj.name;
        var githubName = argsObj.github === undefined ? "" : argsObj.github;
        var authorLink = argsObj.site === undefined ? "" : argsObj.site;
        var authorImage = ""
        if(argsObj.image == null || argsObj.image === "")
        {
            if(!(githubName === "") && github_avatar)
            {
                authorImage = "https://avatars.githubusercontent.com/"+githubName
            }
            else
            {
                var authorImage = default_image;
            }
        }
        
        var authorEmail = argsObj.email === undefined ? "" : argsObj.email;
        var authorZhihu = argsObj.zhihu === undefined ? "" : argsObj.zhihu;
        var authorWechat = argsObj.wechat === undefined ? "" : argsObj.wechat;

        iframes += `<td align="center" style="text-align:center;border: 2px solid #c1cfdc;color: #${font_color};font-weight: ${font_weight};">`;
        iframes += `<a href="${authorLink}"><img src="${authorImage}" width="${image_size};" alt="" style="display: block;margin: 0 auto;padding: 2px;max-width: 96px;height: auto;border: 2px solid #333;border-radius: ${image_size};"/>`;
        iframes += `<sub text-align="center" style="font-size: 15px;">${authorName}</sub></a><br/>`;
        if(!(githubName === ""))
            iframes += `<a href="https://github.com/${githubName}" title="Github"><i class="fab fa-github fa-fw" style="color:#${font_icon_color}"></i>`;
        if(!(authorZhihu === ""))
            iframes += `<a href="${authorZhihu}" title="知乎"><i class="fa fa-custom zhihu fa-fw" style="color:#${font_icon_color}"></i>`;
        if(!(authorZhihu === ""))
            iframes += `<a href="${authorWechat}" title="微信"><i class="fab fa-weixin fa-fw" style="color:#${font_icon_color}"></i>`;
        if(!(authorEmail === ""))
            iframes += `<a href="mailto:${authorEmail}" title="Email"><i class="fa fa-envelope fa-fw" style="color:#${font_icon_color}"></i>`;
        iframes += `</a></td>\n`;

    });
    iframes +="</table>\n</tr>\n";
    return iframes;
}, { ends: true });
