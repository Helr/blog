"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4711],{7394:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>l,data:()=>n});var t=e(641);const a={},l=(0,e(6262).A)(a,[["render",function(i,s){return(0,t.uX)(),(0,t.CE)("div",null,s[0]||(s[0]=[(0,t.Fv)('<p>在前端处理表单时，我们常常需要将表单输入框的内容同步给 JavaScript 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">input</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&quot;</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  @</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">input</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> event</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>v-model</code> 指令帮我们简化了这一步骤：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">input</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> v-model</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>另外，<code>v-model</code> 还可以用于各种不同类型的输入，<code>&lt;textarea&gt;</code>、<code>&lt;select&gt;</code> 元素。它会根据所使用的元素自动使用对应的 DOM 属性和事件组合：</p><ul><li>文本类型的 <code>&lt;input&gt;</code> 和 <code>&lt;textarea&gt;</code> 元素会绑定 <code>value</code> property 并侦听 <code>input</code> 事件；</li><li><code>&lt;input type=&quot;checkbox&quot;&gt;</code> 和 <code>&lt;input type=&quot;radio&quot;&gt;</code> 会绑定 <code>checked</code> property 并侦听 <code>change</code> 事件；</li><li><code>&lt;select&gt;</code> 会绑定 <code>value</code> property 并侦听 <code>change</code> 事件。</li></ul><blockquote><p>[! WARNING] <code>v-model</code> 会忽略任何表单元素上初始的 <code>value</code>、<code>checked</code> 或 <code>selected</code> attribute。它将始终将当前绑定的 <code>JavaScript</code> 状态视为数据的 正确来源。你应该在 JavaScript 中使用<code>data</code> 选项来声明该初始值。</p></blockquote><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2>',8)]))}]]),n=JSON.parse('{"path":"/Vue/basic/input-binding/","title":"表单输入绑定","lang":"zh-CN","frontmatter":{"title":"表单输入绑定","createTime":"2024/12/31 16:09:48","permalink":"/Vue/basic/input-binding/"},"headers":[],"readingTime":{"minutes":0.88,"words":265},"git":{"updatedTime":1735633336000,"contributors":[{"name":"gaobo","username":"gaobo","email":"ql25520@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/gaobo?v=4","url":"https://github.com/gaobo"}]},"filePathRelative":"notes/Vue/Basic/3.选项式/8.表单输入绑定.md","bulletin":false}')}}]);