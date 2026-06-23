import { defineCollections } from "vuepress-theme-plume";

import postsCollections from './postsCollections'
import vueCollections from './series/vueCollections'
import gitCollections from './series/gitCollections'
import notesCollections from './notesCollections'

export default defineCollections([
    // posts
    postsCollections,
    // series/Vue
    vueCollections,
    // notes
    notesCollections,
    gitCollections
    
]);
