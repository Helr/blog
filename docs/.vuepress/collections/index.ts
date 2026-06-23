import { defineCollections } from "vuepress-theme-plume";

const customMeta = {
    tags: true, // 是否显示标签
    /**
     * 是否显示创建时间，或设置时间格式
     * - 'short': 显示为 `2022-01-01`，默认
     * - true ：确认开启
     * - 'long': 显示为 `2022-01-01 00:00:00`
     */
    createTime: true, // boolean | 'short' | 'long'
    readingTime: true, // 是否显示阅读时间估算
    wordCount: true, // 是否显示字数统计
}

export default defineCollections([
    {
        type: "post",
        dir: "posts",
        title: "博客",

        // 文件过滤
        include: ["**/*.md"], // 包含所有 .md 文件
        exclude: ["**/*.snippet.md"], // 排除代码片段文件

        // 页面生成配置
        postList: true, // 启用文章列表页
        link: "/posts/", // 列表页链接
        linkPrefix: "/posts/", // 文章链接前缀
        tags: true, // 启用标签页
        tagsLink: "/tags/posts/", // 标签页链接
        tagsTheme: "colored", // 标签主题 colored|gray|brand
        tagsText: "标签", // 标签页标题
        archives: true, // 启用归档页
        archivesLink: "/archives/posts/", // 归档页链接
        archivesText: "归档", // 归档页标题
        categories: true, // 启用分类页
        categoriesLink: "/categories/posts/", // 分类页链接
        categoriesText: "分类", // 分类页标题
        categoriesExpand: "deep", // 分类展开层级 number|'deep'
        // categoriesTransform: categories => categories, // 分类转换函数

        // 自动 Frontmatter 生成
        autoFrontmatter: {
            title: true, // 自动生成标题
            createTime: true, // 自动生成创建时间
            permalink: true, // 自动生成永久链接
            //   transform: (data, context, locale) => {
            //     // 自定义转换
            //     data.foo ??= "foo";
            //     return data;
            //   },
        },

        // 个人信息配置
        profile: {
            avatar: 'https://theme-plume.vuejs.press/plume.png', // 头像路径
            name: 'helr', // 显示名称
            description: '知是行之始，行是知之成', // 简介文本
            circle: true, // 圆形头像
            location: '上海', // 所在地
            organization: '暂无', // 所属组织
            layout: 'right', // 布局位置 left|right
        },

        // 社交链接
        // social: [
        //     // 使用 iconify name
        //     { icon: 'github', link: 'https://github.com/zhangsan' },
        //     {
        //         // 使用自定义图标
        //         icon: { svg: '<svg>xxxxx</svg>', name: 'xxx' },
        //         link: 'https://xxx.com'
        //     },
        // ],

        // 文章元数据
        meta: customMeta,

    },
    {
        type: "doc",
        dir: "/series/",
        linkPrefix: '/series/',
        title: "系列",
        sidebar: 'auto', // 自动生成导航结构
        sidebarCollapsed: false, // 折叠状态：true-折叠 false-展开


        // 自动 Frontmatter 生成
        autoFrontmatter: {
            title: true, // 自动生成标题
            createTime: true, // 自动生成创建时间
            permalink: true, // 自动生成永久链接
            //   transform: (data, context, locale) => {
            //     // 自定义转换
            //     data.foo ??= "foo";
            //     return data;
            //   },
        },


        // 文章元数据
        meta: customMeta,

    },
    {
        type: "post",
        dir: "notes",
        title: "笔记",
        // 文章元数据
        meta: customMeta,
        // https://theme-plume.vuejs.press/guide/collection/doc/#%E9%9B%86%E5%90%88%E9%A6%96%E9%A1%B5%E5%AE%9A%E5%88%B6


         // 文件过滤
        include: ["**/*.md"], // 包含所有 .md 文件
        exclude: ["**/*.snippet.md"], // 排除代码片段文件

        // 页面生成配置
        postList: true, // 启用文章列表页
        link: "/notes/", // 列表页链接
        linkPrefix: "/notes/", // 文章链接前缀
        tags: true, // 启用标签页
        tagsLink: "/tags/notes/", // 标签页链接
        tagsTheme: "colored", // 标签主题 colored|gray|brand
        tagsText: "标签", // 标签页标题
        archives: true, // 启用归档页
        archivesLink: "/archives/notes/", // 归档页链接
        archivesText: "归档", // 归档页标题
        categories: true, // 启用分类页
        categoriesLink: "/categories/notes/", // 分类页链接
        categoriesText: "分类", // 分类页标题
        categoriesExpand: "deep", // 分类展开层级 number|'deep'
        // categoriesTransform: categories => categories, // 分类转换函数

        // 自动 Frontmatter 生成
        autoFrontmatter: {
            title: true, // 自动生成标题
            createTime: true, // 自动生成创建时间
            permalink: true, // 自动生成永久链接
            //   transform: (data, context, locale) => {
            //     // 自定义转换
            //     data.foo ??= "foo";
            //     return data;
            //   },
        },

        // 个人信息配置
        profile: {
            avatar: 'https://theme-plume.vuejs.press/plume.png', // 头像路径
            name: 'helr', // 显示名称
            description: '知是行之始，行是知之成', // 简介文本
            circle: true, // 圆形头像
            location: '上海', // 所在地
            organization: '暂无', // 所属组织
            layout: 'right', // 布局位置 left|right
        },

        // 社交链接
        // social: [
        //     // 使用 iconify name
        //     { icon: 'github', link: 'https://github.com/zhangsan' },
        //     {
        //         // 使用自定义图标
        //         icon: { svg: '<svg>xxxxx</svg>', name: 'xxx' },
        //         link: 'https://xxx.com'
        //     },
        // ],
    },
]);
