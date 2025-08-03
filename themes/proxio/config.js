/**
 * 另一个落地页主题
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
    PROXIO_WELCOME_TEXT: '瘋速修｜快速．專業．可靠', // 欢迎文字，留空则不启用

    // 英雄区块导航
    PROXIO_HERO_ENABLE: true, // 开启英雄区
    PROXIO_HERO_TITLE_1: '手機壞了？我們幫你搞定', // 英雄区文字
    PROXIO_HERO_TITLE_2: '現場維修｜透明報價｜當日完修｜不留機', // 英雄区文字
    // 英雄区两个按钮，如果TEXT留空则隐藏按钮
    PROXIO_HERO_BUTTON_1_TEXT: 'LINE 立即預約', // 英雄区按钮
    PROXIO_HERO_BUTTON_1_URL:
        'https://lin.ee/OAlo5ku', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_TEXT: '追蹤我們的IG', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_URL: 'https://www.instagram.com/crazyquick_fix/', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

    // 英雄区配图，如需隐藏，改为空值即可 ''
    PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
    PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/


    // 文章区块
    PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
    PROXIO_BLOG_TITLE: '高雄在地經營',
    PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
    PROXIO_BLOG_TEXT_1: '不只是方便，更是可靠',

    // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',


    PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

    // 特性区块
    PROXIO_FEATURE_ENABLE: true, // 特性区块开关
    PROXIO_FEATURE_TITLE: '為什麼選擇瘋速修？',
    PROXIO_FEATURE_TEXT_1: '手機出狀況，你需要一個可靠的團隊。',
    PROXIO_FEATURE_TEXT_2:
        '豐富的案例經驗，專業的維修技術，優質的溝通效率',

    // 特性1
    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
    PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
    PROXIO_FEATURE_1_TITLE_1: '高效維修流程',
    PROXIO_FEATURE_1_TEXT_1: '精簡的維修流程讓每一支手機都能快速完修，即使在繁忙時段，也能穩定交付、不留機。',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
    PROXIO_FEATURE_2_ICON_IMG_URL: '', 
    PROXIO_FEATURE_2_TITLE_1: '一對一溝通',
    PROXIO_FEATURE_2_TEXT_1: '現場清楚說明狀況，根據你的需求量身建議，報價透明、溝通零壓力。',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: '細節修復力',
    PROXIO_FEATURE_3_TEXT_1: '每顆螺絲、每組排線我們都不馬虎，從拆裝到收尾，細節讓你看得見我們的用心。',

    PROXIO_FEATURE_BUTTON_TEXT: '追蹤我們的IG', // 按钮文字
    PROXIO_FEATURE_BUTTON_URL: 'https://www.instagram.com/crazyquick_fix/', // 按钮跳转

    // 首页生涯区块
    PROXIO_CAREER_ENABLE: true, // 区块开关
    PROXIO_CAREER_TITLE: '品牌歷程',
    PROXIO_CAREER_TEXT:
        '從一間小店出發，成為高雄在地有實力的手機維修連鎖品牌',

    // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
    PROXIO_CAREERS: [
        { title: '鳳山光遠店成立', bio: '2016', text: '從鳳山的光遠路小店開始，我們以誠信報價與實在技術服務，累積第一批顧客的信任，也打下了瘋速修的根基。' },
        { title: '草衙店取得 Apple原廠授權', bio: '2022', text: '草衙店正式成為 Apple IRP（獨立維修提供者）授權中心，代表我們的技術與流程通過蘋果標準，能提供原廠級維修體驗。' },
        { title: '進駐五甲｜接待標準化落地', bio: '2023', text: '拓點鳳山五甲，提升服務範圍與可近性，也開始導入更完整的維修接待流程，提升顧客體驗與效率。' }, { title: '小港店開幕｜旗艦擴張', bio: '2025', text: '小港店成立，主打現場維修、透明報價，正式從專業維修走向品牌經營，打造屬於高雄的本地連鎖維修品牌。' },
    ],

    // 首页用户测评区块
    PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
    PROXIO_TESTIMONIALS_TITLE: '修得快，也修得好',
    PROXIO_TESTIMONIALS_TEXT_1: '我們的顧客怎麼說',
    PROXIO_TESTIMONIALS_TEXT_2:
        '瘋速修的透明報價與快速完修，已經成為許多高雄在地人指定的手機急診室，來看看顧客怎麼說',

    // 用户测评处的跳转按钮
    PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: '立即預約',

    // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'iPhone突然開不了機，本來以為報廢了，結果他們半小時就修好！而且不用留機，真的很安心 ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatars/user1.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '鳳山李小姐',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '在地護理師',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.instagram.com/crazyquick_fix/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '價格公開透明，沒有亂報價，現場看他們拆機很專業，整體超過預期~',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '鳥松林先生',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '工程師',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常见问题解答',
    PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
    PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
    PROXIO_FAQS: [
        { q: 'NotionNext有帮助文档吗？', a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署' },
        { q: '部署后要如何编写文章？', a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>' },
        { q: '站点部署失败，更新失败？', a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助' },
        { q: '文章没有实时同步？', a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '关于作者',
    PROXIO_ABOUT_TEXT_1: 'I am an Architect Turned Into a Product Designer',
    PROXIO_ABOUT_TEXT_2:
        'With a background in architecture, I now apply my expertise to product design, blending aesthetics, functionality, and innovation. My goal is to create modern, user-focused designs that bring your vision to life.',
    PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
    PROXIO_ABOUT_KEY_1: '经验年限',
    PROXIO_ABOUT_VAL_1: '10年+',
    PROXIO_ABOUT_KEY_2: '客户',
    PROXIO_ABOUT_VAL_2: '1000+',
    PROXIO_ABOUT_KEY_3: '交付项目',
    PROXIO_ABOUT_VAL_3: '5000+',
    PROXIO_ABOUT_KEY_4: '累积创作时长（小时）',
    PROXIO_ABOUT_VAL_4: '10000+',

    PROXIO_ABOUT_BUTTON_URL: '/about',
    PROXIO_ABOUT_BUTTON_TEXT: '关于我',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        'Web Design',
        'Logo Design',
        'Mobile App Design',
        'Product Design'
    ],

    PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

    // 页脚三列菜单组
    // 页脚菜单
    PROXIO_FOOTER_LINKS: [
        {
            name: '友情链接',
            menus: [
                {
                    title: 'Tangly的学习笔记',
                    href: 'https://blog.tangly1024.com'
                },
                {
                    title: 'NotionNext',
                    href: 'https://www.tangly1024.com'
                }
            ]
        },
        {
            name: '开发者',
            menus: [
                { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
                {
                    title: '开发帮助',
                    href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
                },
                {
                    title: '功能反馈',
                    href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
                },
                {
                    title: '技术讨论',
                    href: 'https://github.com/tangly1024/NotionNext/discussions'
                },
                {
                    title: '关于作者',
                    href: 'https://blog.tangly1024.com/about'
                }
            ]
        }],

    PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

    PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
    PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

    // 404页面的提示语
    PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
    PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
    PROXIO_404_BACK: '回到主页',

    // 页面底部的行动呼吁模块
    PROXIO_CTA_ENABLE: true,
    PROXIO_CTA_TITLE: '与我建立联系',
    PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
    PROXIO_CTA_DESCRIPTION:
        '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        '/about',
    PROXIO_CTA_BUTTON_TEXT: '联系我',

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
