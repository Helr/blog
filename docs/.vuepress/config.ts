import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'blog',
      lang: 'zh-CN',
      description: '个人blog',
    },
    '/en/': {
      title: 'blog',
      lang: 'en-US',
      description: 'Personal blog',
    },
  },

  bundler: webpackBundler(),


  theme: plumeTheme({
    // 添加您的部署域名
    // hostname: 'https://your_site_url',
    // your git repo url
    docsRepo: '',
    docsDir: 'docs',

    profile: {
      name: 'helr',
      description: '描述文字，座右铭/签名',
      // avatar: '/blogger.png',
      location: 'shanghai',
      // organization: '您的组织',
      circle: true, // 是否为圆形头像
      layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
    },
    // 社交链接
    social: [
      { icon: 'github', link: 'https://github.com/Helr' },
      // ... more
    ],
    blog:{
      /**
       * 通过 glob string 配置包含文件，
       * 默认读取 源目录中的所有 `.md` 文件，但会排除 `notes` 配置中用于笔记的目录。
       */
      include: ['**/*.md'],
      // 如果希望只将源目录下某个目录下的文章读取为博客文章，比如 `blog` 目录，可以配置为：
      // include: ['blog/**/*.md'],

      /**
       * 通过 glob string 配置排除的文件，相对于 源目录
       */
      exclude: ['.vuepress/', '**/README.md'],

      // 禁用分页
      // pagination: false,
      // 每页显示的文章数量
      pagination: 15,
      //  配置 封面图 布局位置
      // postCover: 'left', // 'left' | 'right' | 'odd-left' | 'odd-right' | 'top'
      postCover: {
        // url:'/blog/images/blog/bg-blog.jpg',
        layout: 'odd-left',
        ratio: '16:9',
        width: 300,
        compact: false
      }
    },

    // 控制部分自动生成
    autoFrontmatter: {
      permalink: true, // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true, // 是否生成标题
    },

    plugins: {

      git:true,
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
          //  强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript','vue','vue-html'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      // },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },

  }),
})
