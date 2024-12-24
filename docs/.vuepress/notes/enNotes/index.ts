import {defineNoteConfig, defineNotesConfig} from "vuepress-theme-plume";

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
    dir: 'demo',
    link: '/demo',
    sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
    dir: 'en/notes',
    link: '/en/',
    notes: [enDemoNote],
})
