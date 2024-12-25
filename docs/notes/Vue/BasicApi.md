---
title: BasicApi
createTime: 2024/12/25 16:09:16
permalink: /Vue/p3qga6dt/
---

# basicApi

## createApp 声明并初始化一个应用实例

返回一个新对象, 用于创建一个 Vue 应用

```ts
import {createApp} from 'vue'

const app = createApp({
    /* 根组件选项 */
})
```

> 在 cdn 引入的时候，会有一个 Vue 的全局对象，可以在 vue 中获取 createApp 函数

## 挂载应用

**参数**：接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串，类似于 `querySelector`。
**返回值**： 是根组件实例而非应用实例


使用 `.mount()` 将组件挂载到 DOM 上 (此处的 DOM 指的是 `#app`)

```html
<div id="app"></div>
```

```ts
app.mount('#app')
```
应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分

### DOM 中的根组件模板

