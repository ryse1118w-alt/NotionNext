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
        '從一間小店出發，成為手機維修連鎖品牌',

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
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '簡先生',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '在地鳳山人',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.instagram.com/crazyquick_fix/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '價格公開透明，沒有亂報價，現場看他們拆機很專業，整體超過預期~',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '小白',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '資訊工程師',
            PROXIO_TESTIMONIALS_ITEM_URL: ''
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '很少看到維修店這麼乾淨有系統的，服務也不會硬推銷，推薦給需要修手機的朋友 ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '阿哲',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '大學生',
            PROXIO_TESTIMONIALS_ITEM_URL: ''
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '小港新店很方便，剛好住附近，換電池延長保固真的有夠佛心',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '阿齊',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '在地小港人',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '之前在別間修過結果問題沒解決，來這裡一次就搞定，之後都認準瘋速修了。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Jen',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '補習班老師',
            PROXIO_TESTIMONIALS_ITEM_URL: ''
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: '我手機掉進水裡，以為救不回來了，結果店員立刻幫我檢查還現場修好，超感動',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '許小姐',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '飲料店店員',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常見問題解答',
    PROXIO_FAQ_TEXT_1: '關於維修，你可能會想問這些',
    PROXIO_FAQ_TEXT_2: '我們整理了最常收到的問題，如果還有其他疑問，歡迎聯絡我們',
    PROXIO_FAQS: [
        { q: '維修大概要多久？', a: '多數手機維修項目如換電池、螢幕，大約 30 分鐘內可完成，主機板或特殊故障則需現場評估' },
        { q: '維修需要留手機嗎？', a: '我們大多數維修都提供「不留機」服務，顧客可全程在現場等待與觀看。' },
        { q: '有提供保固嗎？', a: '有的。一般維修提供 3～6 個月保固，若參與活動（如終生電池保固），未來只收工本費也可再更換。' },
        { q: '可以預約嗎？', a: '可以，建議透過官方 LINE 事先預約，避免現場等候。也能直接來門市，我們會盡快為您處理。' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '關於瘋速修｜Apple授權維修中心',
    PROXIO_ABOUT_TEXT_1: '我們是高雄在地的手機維修品牌',
    PROXIO_ABOUT_TEXT_2:
        '從鳳山光遠路的小店起家，到擴點五甲與小港，我們秉持「快速、透明、可靠」的原則，致力於提供專業、不留機的維修體驗。草衙店更取得 Apple 原廠 IRP 授權，為顧客帶來原廠等級的服務流程。',
    PROXIO_ABOUT_PHOTO_URL: '',
    PROXIO_ABOUT_KEY_1: '成立至今',
    PROXIO_ABOUT_VAL_1: '10年',
    PROXIO_ABOUT_KEY_2: '累積顧客',
    PROXIO_ABOUT_VAL_2: '20000+',
    PROXIO_ABOUT_KEY_3: '維修案例',
    PROXIO_ABOUT_VAL_3: '30000+',
    PROXIO_ABOUT_KEY_4: '門市據點',
    PROXIO_ABOUT_VAL_4: '鳳山｜五甲｜草衙｜小港',

    PROXIO_ABOUT_BUTTON_URL: '/about',
    PROXIO_ABOUT_BUTTON_TEXT: '關於我',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        '快速現場維修',
        '原廠授權 IRP 認證',
        '主機板晶片級維修',
        '高雄連鎖營運'
    ],

    PROXIO_FOOTER_SLOGAN: '現場維修｜透明報價｜30分鐘完修｜Apple 原廠 IRP 授權',

    // 页脚三列菜单组
    // 页脚菜单
    PROXIO_FOOTER_LINKS: [
        {
            name: '網站搭建',
            menus: [
                {
                    title: '政哲',
                    href: ''
                },
                {
                    title: 'JIGGY',
                    href: ''
                }
            ]
        },
        {
            name: '社群',
            menus: [
                { title: '', href: '' },
                {
                    title: '',
                    href: ''
                },
                {
                    title: 'LINE官方帳號',
                    href: 'https://line.me/R/ti/p/@435nnibj?oat_content=url&ts=08030620'
                },
                {
                    title: '臉書',
                    href: 'https://www.facebook.com/profile.php?id=61570096991502'
                },
                {
                    title: 'IG',
                    href: 'https://www.instagram.com/crazyquick_fix/'
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
    PROXIO_CTA_TITLE: '讓我們來幫你的手機恢復健康',
    PROXIO_CTA_TITLE_2: '專業快速維修，立即預約',
    PROXIO_CTA_DESCRIPTION:
        '瘋速修提供透明報價、原廠等級維修、免費檢測服務，不論是螢幕破裂、電池老化、主機板故障，我們都能幫你搞定。',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        'https://line.me/R/ti/p/@435nnibj?oat_content=url&ts=08030620',
    PROXIO_CTA_BUTTON_TEXT: '立即預約維修',

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
