import {defineNavbarConfig, type NavItem} from "vuepress-theme-plume";

export const enNavbar: NavItem[] = defineNavbarConfig([
    {text: 'Home', link: '/en/'},
    {text: 'Blog', link: '/en/blog/'},
    {text: 'Tags', link: '/en/blog/tags/'},
    {text: 'Archives', link: '/en/blog/archives/'},
    {
        text: 'Notes',
        items: [
            {text: 'Demo', link: '/en/notes/demo/README.md'},
            // {text: 'git', link: '/notes/git/README.md'}
        ]
    },
])
