import {defineNavbarConfig, type ThemeNavItem} from "vuepress-theme-plume";

export const zhNavbar: ThemeNavItem[] = defineNavbarConfig([
    {text: '首页', link: '/'},
    {text: '博客', link: '/posts/'},
    {
        text: '系列', 
        // link: '/series/',
        // prefix: '/series/',
        activeMatch:'^/series/',
        items: [
            {text: 'JavaScript', link: '/series/JavaScript/README.md'},
            {text: 'Vue', link: '/series/Vue/start.md'},
            {text: '示例', link: '/series/demo/'},
            {text: 'Git', link: '/series/Git/'},
        ]

    },
    {text: '笔记', link: '/notes/'},
    {text: '代办', link: '/docs/TODO/'},
    // {text: '标签', link: '/tags/'},
    // {text: '归档', link: '/archives/'},
    {
        text: '更多',
        activeMatch: '^/link/',
        items: [
            {text: '示例', link: '/link/demo/README.md'},
            {text: 'Git', link: '/link/Git/README.md'},
            {text: 'JavaScript', link: '/link/JavaScript/README.md'},
            {text: 'Vue', link: '/link/Vue/start.md'},
        ]
    },
])
