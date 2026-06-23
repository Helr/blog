import {defineNavbarConfig, type ThemeNavItem} from "vuepress-theme-plume";

export const zhNavbar: ThemeNavItem[] = defineNavbarConfig([
    {text: '首页', link: '/'},
    {text: '博客', link: '/posts/', activeMatch: '^/posts/',},
    {
        text: '系列', 
        // link: '/series/',
        // prefix: '/series/',
        activeMatch:'^/series/',
        items: [
            {text: 'JavaScript', link: '/series/JavaScript/README.md', activeMatch: '^/series/JavaScript/',},
            {text: 'Vue', link: '/series/Vue/start.md', activeMatch: '^/series/Vue/',},
            {text: 'Git', link: '/series/Git/git.md', activeMatch: '^/series/Git/',},
            {text: '示例', link: '/series/demo/', activeMatch: '^/series/demo/',},
        ]

    },
    {text: '笔记', link: '/notes/', activeMatch: '^/notes/',},
    {text: '代办', link: '/docs/TODO/', activeMatch: '^/docs/TODO/',},
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
