---
title: Basic
createTime: 2024/12/25 15:20:33
permalink: /Vue/crb26jrt/
---

# vue 基础

> Vue 2 已于 2023 年 12 月 31 日停止维护。详见 [Vue 2 终止支持 (EOL)](https://v2.cn.vuejs.org/eol/)

## 介绍

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。

### 官网

[Vue.js](https://cn.vuejs.org/)

### playground

[https://codesandbox.io/templates/vue-vite](https://codesandbox.io/templates/vue-vite)

## 使用

### cdn 引入

```html

<script src="https://unpkg.com/vue@next"></script>
<script>
    const app = Vue.createApp({})
    app.mount('#app')
</script>
<div id="app">
    <div>Hello Vue 3.0!</div>
</div>
```

### 下载下来后本地引入

```html

<script src="./vue.global.js"></script>
<script>
```

### npm 引入 vue (或者说安装 vue)

```shell
npm install vue@next
```

### 使用 vue-cli 创建项目

```shell
npm install -g @vue/cli
vue create my-project
```

## 名词解释：

> - 框架：是一套完整的解决方案，它包括了前端开发的所有阶段，包括设计、编码、测试等。
> - 渐进式框架：是指在开发过程中，可以逐步地添加新的功能，而不需要重新构建整个框架。
> - 声明式框架：是指在开发过程中，可以声明式地描述界面，而不需要手动地编写具体的代码。




