"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7803],{4799:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>e,data:()=>h});var n=a(641);const l={},e=(0,a(6262).A)(l,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,i[0]||(i[0]=[(0,n.Fv)('<h2 id="声明相应式状态" tabindex="-1"><a class="header-anchor" href="#声明相应式状态"><span>声明相应式状态</span></a></h2><p>选用选项式 API 时，会用 data 选项来声明组件的响应式状态。此选项的值应为返回一个对象的函数。Vue 将在创建新组件实例的时候调用此函数，并将函数 返回的对象用响应式系统进行包装。此对象的所有顶层属性都会被代理到组件实例 (即方法和生命周期钩子中的 this) 上。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      count</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // `mounted` 是生命周期钩子，之后我们会讲到</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  mounted</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // `this` 指向当前组件实例</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">count</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // =&gt; 1</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 数据属性也可以被更改</span></span>\n<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">count</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些实例上的属性仅在实例首次创建时被添加，因此你需要确保它们都出现在 data 函数返回的对象上。若所需的值还未准备好，在必要时也可以使用 null、undefined 或者其他一些值占位。</p><p>虽然也可以不在 data 上定义，直接向组件实例添加新属性，但这个属性将无法触发响应式更新。</p><p>Vue 在组件实例上暴露的内置 API 使用 $ 作为前缀。它同时也为内部属性保留 _ 前缀。因此，你应该避免在顶层 data 上使用任何以这些字符作前缀的属性。</p><h3 id="响应式代理-vs-原始值" tabindex="-1"><a class="header-anchor" href="#响应式代理-vs-原始值"><span>响应式代理 vs. 原始值</span></a></h3><p>在 Vue 3 中，数据是基于 JavaScript Proxy (代理) 实现响应式的。使用过 Vue 2 的用户可能需要注意下面这样的边界情况：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      someObject</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  mounted</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> newObject</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>\n<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">someObject</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> newObject</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">newObject</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ===</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">someObject</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // false</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你在赋值后再访问 this.someObject，此值已经是原来的 newObject 的一个响应式代理。与 Vue 2 不同的是，这里原始的 newObject 不会变为响应式：请确保始终通过 this 来访问响应式状态。</p><h2 id="声明方法" tabindex="-1"><a class="header-anchor" href="#声明方法"><span>声明方法</span></a></h2><p>要为组件添加方法，我们需要用到 methods 选项。它应该是一个包含所有方法的对象：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      count</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    increment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">      this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">count</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">++</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  mounted</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 在其他方法或是生命周期中也可以调用方法</span></span>\n<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">increment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue 自动为 methods 中的方法绑定了永远指向组件实例的 this。这确保了方法在作为事件监听器或回调函数时始终保持正确的 this。你不应该在定义 methods 时使用箭头函数，因为箭头函数没有自己的 this 上下文。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    increment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 反例：无法访问此处的 `this`!</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和组件实例上的其他属性一样，方法也可以在模板上被访问。在模板中它们常常被用作事件监听器：</p><div class="language-vue-html line-numbers-mode" data-ext="vue-html" data-title="vue-html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> @</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">click</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">increment</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{{ count }}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在上面的例子中，<code>increment</code> 方法会在 <code>&lt;button&gt;</code> 被点击时调用。</p><h3 id="dom-更新" tabindex="-1"><a class="header-anchor" href="#dom-更新"><span>DOM 更新</span></a></h3><p>当你修改了响应式状态时，DOM 会被自动更新。但是需要注意的是，DOM 更新不是同步的。Vue 会在“next tick”更新周期中缓冲所有状态的修改，以确保不管 你进行了多少次状态修改，每个组件都只会被更新一次。</p><p><strong>要等待 DOM 更新完成后再执行额外的代码，可以使用 <a href="https://cn.vuejs.org/api/general#nexttick" target="_blank" rel="noopener noreferrer"><code>nextTick()</code></a> 全局 API：</strong></p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> nextTick</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    async</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> increment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">      this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">count</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">++</span></span>\n<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      await</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> nextTick</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 现在 DOM 已经更新了</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有状态方法" tabindex="-1"><a class="header-anchor" href="#有状态方法"><span>有状态方法</span></a></h3><p>在某些情况下，我们可能需要动态地创建一个方法函数(工厂模式)，比如创建一个预置防抖的事件处理器：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> debounce</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">lodash-es</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 使用 Lodash 的防抖函数</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    click</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> debounce</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // ... 对点击的响应 ...</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 500</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过这种方法对于被重用的组件来说是有问题的，因为这个预置防抖的函数是有状态的：它在运行时维护着一个内部状态。如果多个组件实例都共享这同一个预置 防抖的函数，那么它们之间将会互相影响。</p><p>要保持每个组件实例的防抖函数都彼此独立，我们可以改为在 created 生命周期钩子中创建这个预置防抖的函数：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  created</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 每个实例都有了自己的预置防抖的处理函数</span></span>\n<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">debouncedClick</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> _</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">debounce</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">click</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 500</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  unmounted</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 最好是在组件卸载时</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 清除掉防抖计时器</span></span>\n<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">debouncedClick</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cancel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    click</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // ... 对点击的响应 ...</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',28)]))}]]),h=JSON.parse('{"path":"/Vue/Options/Reactivity%20Fundamentals/","title":"选项式基础","lang":"zh-CN","frontmatter":{"title":"选项式基础","createTime":"2024/12/27 10:05:21","permalink":"/Vue/Options/Reactivity Fundamentals/"},"headers":[],"readingTime":{"minutes":3.74,"words":1121},"git":{"updatedTime":1735282618000,"contributors":[{"name":"gaobo","username":"gaobo","email":"ql25520@163.com","commits":3,"avatar":"https://avatars.githubusercontent.com/gaobo?v=4","url":"https://github.com/gaobo"}]},"filePathRelative":"notes/Vue/Basic/3.选项式/1.响应式基础.md","bulletin":false}')}}]);