import {defineNoteConfig, defineNotesConfig} from "vuepress-theme-plume";
// docx
import {zhGitNote} from "./git";
import type {NoteItem} from "vuepress-theme-plume/lib/shared";
import {zhJavaScriptNote} from "./JavaScript";
import {zhVueNote} from "./Vue";

/* =================== locale: zh-CN ======================= */

const cssModules: NoteItem = {
    // 声明笔记的目录，相对于 `notes.dir`，这里表示 `notes/typescript` 目录
    dir: 'CSS',
    // 声明笔记的链接前缀，与 `notes.link` 拼接，这里表示 `/typescript/`
    // 笔记内的所有文章会以 `/typescript/` 作为访问链接前缀。
    link: '/CSS/',
    // 配置 笔记侧边导航栏，用于导航向笔记内的所有文档
    // 声明为 `auto` 的，将根据目录结构自动生成侧边栏导航
    sidebar: 'auto'
}
const zhDemoNote = defineNoteConfig({
    dir: 'demo',
    link: '/demo',
    sidebar: ['', 'foo', 'bar'],
})

const noteList: NoteItem[] = [
    cssModules,
    {
        dir: 'HTML',
        link: '/HTML/',
        sidebar: 'auto'
    },
    {
        dir: 'React',
        link: '/React/',
        sidebar: 'auto'
    },
    {
        dir: 'Typescript',
        link: '/Typescript/',
        sidebar: 'auto'
    },
    zhDemoNote,
    zhGitNote,
    zhJavaScriptNote,
    zhVueNote
]

export const zhNotes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: noteList,
})
