hexo.extend.tag.register('authortables', function (args, content) {
    let default_avatar = ""
    let image_size = "80px"
    let font_icon_color = "555"
    let font_color = "009bf5"
    let font_weight = 500
    let github_avatar = true
    let board_width = "260px"
    let margin_rule = "auto"
    if(!(hexo.config.hexo_contributor === undefined))
    {
        if(!(hexo.config.hexo_contributor.default_avatar === null))
          default_avatar = hexo.config.hexo_contributor.default_avatar;
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
        if(!(hexo.config.hexo_contributor.board_width === null))
            board_width = hexo.config.hexo_contributor.board_width;
        if(!(hexo.config.hexo_contributor.margin_rule === null))
            margin_rule = hexo.config.hexo_contributor.margin_rule;
    }
    let iframes=`<table style="width:auto;margin:${margin_rule};margin-bottom:5px;margin-top:5px;">\n<tr>\n`;

    content.split("\n").map((author_arg,i)=>{
        if(author_arg === "")
            return;
        const argsObj = {}
        let author_args = author_arg.split(',');
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
        var githubName = argsObj.github_id === undefined ? "" : argsObj.github_id;
        var authorLink = argsObj.site_addr === undefined ? "" : argsObj.site_addr;
        var authorAvatar = ""
        if(argsObj.avatar_image == null || argsObj.avatar_image === "")
        {
            if(!(githubName === "") && github_avatar)
            {
                authorAvatar = "https://avatars.githubusercontent.com/"+githubName
            }
            else
            {
                var authorAvatar = default_avatar;
            }
        }
        else
        {
            authorAvatar = argsObj.avatar_image;
        }
        
        var authorEmail = argsObj.email === undefined ? "" : argsObj.email;
        var authorZhihu = argsObj.zhihu_addr === undefined ? "" : argsObj.zhihu_addr;
        var authorWechat = argsObj.wechat_image === undefined ? "" : argsObj.wechat_image;
        var authorStackoverflow = argsObj.stackoverflow === undefined ? "" : argsObj.stackoverflow;
        var authorArticleNum = argsObj.article_num === undefined ? 0 : argsObj.article_num;
        iframes += `<td align="center" style="text-align:center;border: 1px solid #c1cfdc;color: #${font_color};font-weight: ${font_weight};width: ${board_width}; padding: 10px 10px;">`;
        iframes += `<a href="${authorLink}"><img src="${authorAvatar}" width="${image_size};" alt="" style="display: block;margin: 0 auto;padding: 2px;max-width: 96px;height: auto;border: 2px solid #333;border-radius: ${image_size};"/></a>`;
        iframes += `<sub text-align="center" style="font-size: 15px;">${authorName}</sub></a><br/>`;
        if(!(githubName === ""))
            iframes += `<a href="https://github.com/${githubName}" title="Github"><i class="fab fa-github fa-fw" style="color:#${font_icon_color}"></i></a>`;
        if(!(authorZhihu === ""))
            iframes += `<a href="${authorZhihu}" title="知乎"><i class="fa fa-custom zhihu fa-fw" style="color:#${font_icon_color}"></i></a>`;
        if(!(authorZhihu === ""))
            iframes += `<a href="${authorWechat}" title="微信"><i class="fab fa-weixin fa-fw" style="color:#${font_icon_color}"></i></a>`;
        if(!(authorStackoverflow === ""))
            iframes += `<a href="${authorStackoverflow}" title="stack overflow"><i class="fab fa-stack-overflow" style="color:#${font_icon_color}"></i></a>`;
        if(!(authorEmail === ""))
            iframes += `<a href="mailto:${authorEmail}" title="Email"><i class="fa fa-envelope fa-fw" style="color:#${font_icon_color}"></i></a>`;
        if(!(authorArticleNum == null || authorArticleNum === 0))
        {
            iframes += `<br/>`;
            iframes += `<sub text-align="center" style="font-size: 14px;color: #555";buttom: 0;>发表 ${authorArticleNum} 篇内容</sub></a>`;
        }
        iframes += `</a></td>\n`;

    });
    iframes +=`</table>\n</tr>\n`;
    return iframes;
}, { ends: true });

hexo.extend.tag.register('allcontributor', function (args, content) 
{
    let default_avatar = ""
    let image_size = "80px"
    let font_icon_color = "555"
    let font_color = "009bf5"
    let font_weight = 500
    let github_avatar = true
    let board_width = "100px"
    let margin_rule = "auto"
    if(!(hexo.config.hexo_contributor === undefined))
    {
        if(!(hexo.config.hexo_contributor.default_avatar === null))
          default_avatar = hexo.config.hexo_contributor.default_avatar;
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
        if(!(hexo.config.hexo_contributor.board_width === null))
            board_width = hexo.config.hexo_contributor.board_width;
        if(!(hexo.config.hexo_contributor.margin_rule === null))
            margin_rule = hexo.config.hexo_contributor.margin_rule;
    }
    let iframes=`<table style="width:auto;margin:${margin_rule};margin-bottom:5px;margin-top:5px;">\n<tr>\n`;

    let authors = new Array();
    var posts = hexo.locals.get('posts');
    posts.each(function(post, index) {
            var authorName = post.author.name
            console.log(post.title);
            if(authorName == undefined)
                return;
            var found = false;
            authors.forEach((author)=>{
                if(authorName == author.name){
                    author.article_num += 1;
                    found = true;
                }
            });
            if(!found){
                var newAuthor = {
                    name: "",
                    github_id: "",
                    avatar_image: "",
                    site_addr: "",
                    email: "",
                    zhihu_addr: "",
                    wechat_image: "",
                    article_num: 1
                }
                newAuthor.name = post.author.name;
                newAuthor.github_id = post.author.github_id;
                newAuthor.avatar_image = post.author.avatar_image;
                newAuthor.site_addr = post.author.site_addr;
                newAuthor.email = post.author.email;
                newAuthor.zhihu_addr = post.author.zhihu_addr;
                newAuthor.wechat_image = post.author.wechat_image;
                authors.push(newAuthor);
                console.log(authors);
            }
    });

    authors.sort(function(a,b){return a.article_num < b.article_num;});

    var result = [];
    for(var i=0,len=authors.length;i<len;i+=7){
       result.push(authors.slice(i,i+7));
    }
    result.forEach(function(authors, index) {
        iframes += `<table style="width:auto;margin:${margin_rule};margin-bottom:5px;margin-top:5px;"><tr>`;
        authors.forEach(function(post, index) 
        {
            // console.log(post);
            var article_num = post.article_num;
            var authorName = post.name;
            var githubName = post.github_id;
            var authorLink = post.site_addr;
            var authorAvatar = ""
            if(post.avatar_image == null || post.avatar_image === "")
            {
                if(!(githubName === "") && github_avatar)
                {
                authorAvatar = "https://avatars.githubusercontent.com/"+githubName
                }
                else
                {
                var authorAvatar = default_avatar;
                }
            }
            else
            {
                authorAvatar = post.avatar_image;
            }
            var authorEmail = post.email;
            var authorZhihu = post.zhihu_addr;
            var authorWechat = post.wechat_image;
            var authorStackoverflow = "";

            iframes += `<td align="center" style="text-align:center;border: 1px solid #c1cfdc;color: #${font_color};font-weight: ${font_weight};width: ${board_width}; padding: 10px 10px;">`;
            iframes += `<a href="${authorLink}"><img src="${authorAvatar}" width="${image_size};" alt="" style="display: block;margin: 0 auto;padding: 2px;max-width: 96px;height: auto;border: 2px solid #333;border-radius: ${image_size};"/>`;
            iframes += `<sub text-align="center" style="font-size: 15px;">${authorName}</sub></a><br/>`;
            if(!(githubName == null || githubName === ""))
                iframes += `<a href="https://github.com/${githubName}" title="Github"><i class="fab fa-github fa-fw" style="color:#${font_icon_color}"></i></a>`;
            if(!(authorZhihu == null || authorZhihu === ""))
                iframes += `<a href="${authorZhihu}" title="知乎"><i class="fa fa-custom zhihu fa-fw" style="color:#${font_icon_color}"></i></a>`;
            if(!(authorZhihu == null || authorZhihu === ""))
                iframes += `<a href="${authorWechat}" title="微信"><i class="fab fa-weixin fa-fw" style="color:#${font_icon_color}"></i></a>`;
            if(!(authorStackoverflow == null || authorStackoverflow === ""))
                iframes += `<a href="${authorStackoverflow}" title="stack overflow"><i class="fab fa-stack-overflow" style="color:#${font_icon_color}"></i></a>`;
            if(!(authorEmail == null || authorEmail === ""))
                iframes += `<a href="mailto:${authorEmail}" title="Email"><i class="fa fa-envelope fa-fw" style="color:#${font_icon_color}"></i></a>`;
            if(!(article_num == null || article_num === 0))
            {
                iframes += `<br/>`;
                iframes += `<sub text-align="center" style="font-size: 14px;color: #555";buttom: 0;>发表 ${article_num} 篇内容</sub></a>`;
            }
        });
        iframes += `</table></tr>`;
   });
    return iframes;
}, { async: false });
