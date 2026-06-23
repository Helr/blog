
import { type ThemeCollectionItem } from 'vuepress-theme-plume'

import customMeta from '../../utils/CustomMeta'
// notes

const notesCollections : ThemeCollectionItem =  {
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
            // avatar: './../public/avatar.jpg', // 头像路径
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
    }

    export default notesCollections