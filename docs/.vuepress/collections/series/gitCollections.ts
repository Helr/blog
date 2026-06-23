import { type ThemeCollectionItem } from 'vuepress-theme-plume'

import customMeta from '../../../utils/CustomMeta'

// series/Vue

const gitCollections : ThemeCollectionItem =  {
        type: "doc",
        dir: "/series/Git",
        linkPrefix: '/series/Git',
        title: "git",
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

    }

    export default gitCollections