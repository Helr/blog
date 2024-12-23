import {NotesOptions} from "vuepress-theme-plume";
import {NoteItem, SidebarItem} from "vuepress-theme-plume/lib/shared";

const cssModules :NoteItem ={
      // 声明笔记的目录，相对于 `notes.dir`，这里表示 `notes/typescript` 目录
      dir: 'CSS',
      // 声明笔记的链接前缀，与 `notes.link` 拼接，这里表示 `/typescript/`
      // 笔记内的所有文章会以 `/typescript/` 作为访问链接前缀。
      link: '/CSS/',
      // 配置 笔记侧边导航栏，用于导航向笔记内的所有文档
      // 声明为 `auto` 的，将根据目录结构自动生成侧边栏导航
      sidebar: 'auto'
    }

const notes : NotesOptions = {
    // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
    dir: '/notes/',
    link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/' （默认配置，通常您不需要声明它）
    notes: [
      // 每个笔记都是 `notes` 数组中的一个对象
      cssModules,
      {
        dir: 'typescript',
        link: '/typescript/',
        sidebar: 'auto'
      },
      {
        dir: 'HTML',
        link: '/HTML/',
        sidebar: 'auto'
      },
      {
        dir: 'JavaScript',
        link: '/JavaScript/',
        sidebar: 'auto'
      },
      {
        dir: 'Vue',
        link: '/Vue/',
        sidebar: 'auto'
      },
      {
        dir: 'React',
        link: '/React/',
        sidebar: 'auto'
      },
      {
        dir: 'demo',
        link: '/demo/',
        sidebar: 'auto'
      }
    ]
}

export default notes;
