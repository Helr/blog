import {defineNavbarConfig, type NavItem} from "vuepress-theme-plume";

export const zhNavbar: NavItem[] = defineNavbarConfig([
    {text: '首页', link: '/'},
    {text: '博客', link: '/blog/'},
    {text: '标签', link: '/blog/tags/'},
    {text: '归档', link: '/blog/archives/'},
    {
        text: '笔记',
        activeMatch: '^/notes/',
        items: [
            {text: '示例', link: '/notes/demo/README.md'},
            {text: 'Git', link: '/notes/Git/README.md'}
        ]
    },
])