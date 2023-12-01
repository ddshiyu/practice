import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.1bfda989.js";const d=JSON.parse('{"title":"Node.js基础","description":"","frontmatter":{},"headers":[],"relativePath":"backend/node.md","filePath":"backend/node.md","lastUpdated":1701228408000}'),p={name:"backend/node.md"},l=n(`<h1 id="node-js基础" tabindex="-1">Node.js基础 <a class="header-anchor" href="#node-js基础" aria-label="Permalink to &quot;Node.js基础&quot;">​</a></h1><h2 id="一、path-resolve" tabindex="-1">一、Path.resolve <a class="header-anchor" href="#一、path-resolve" aria-label="Permalink to &quot;一、Path.resolve&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">)     </span><span style="color:#6A737D;">//引入node的path模块</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./baz&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// returns &#39;/foo/bar/baz&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;baz&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// returns &#39;/foo/bar/baz&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/baz&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// returns &#39;/baz&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;../baz&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// returns &#39;/foo/baz&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;/foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;../baz&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// returns &#39;/foo/baz&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;./foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;../baz&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// returns &#39;/home/foo/baz&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;../baz&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// returns &#39;/home/foo/baz&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">)     </span><span style="color:#6A737D;">//引入node的path模块</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./baz&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// returns &#39;/foo/bar/baz&#39;</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;baz&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// returns &#39;/foo/bar/baz&#39;</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;/baz&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// returns &#39;/baz&#39;</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;../baz&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// returns &#39;/foo/baz&#39;</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;/foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;../baz&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// returns &#39;/foo/baz&#39;</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;./foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;../baz&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// returns &#39;/home/foo/baz&#39;</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;../baz&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// returns &#39;/home/foo/baz&#39;</span></span></code></pre></div><p>从后向前，若字符以 <code>/</code> 开头，不会拼接到前面的路径(<strong>因为拼接到此已经是一个绝对路径</strong>)；若以 <code>../</code> 开头，拼接前面的路径，且不含最后一节路径；若以 <code>./</code> 开头 或者没有符号 则拼接前面路径；<strong>需要注意的是</strong>：如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录。</p>`,4),e=[l];function r(t,c,E,y,F,h){return a(),o("div",null,e)}const i=s(p,[["render",r]]);export{d as __pageData,i as default};
