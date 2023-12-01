import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1bfda989.js";const d=JSON.parse('{"title":"github actions 部署vue3项目","description":"","frontmatter":{},"headers":[],"relativePath":"tools/githubActions.md","filePath":"tools/githubActions.md","lastUpdated":1698568713000}'),p={name:"tools/githubActions.md"},o=l(`<h1 id="github-actions-部署vue3项目" tabindex="-1">github actions 部署vue3项目 <a class="header-anchor" href="#github-actions-部署vue3项目" aria-label="Permalink to &quot;github actions 部署vue3项目&quot;">​</a></h1><p>最近打算使用VUE3 + TS开发一个番茄时钟项目，顺便使用github actions部署一下，它有很多优点，也可以省去服务器的费用</p><h2 id="一、package-json设置" tabindex="-1">一、package.json设置 <a class="header-anchor" href="#一、package-json设置" aria-label="Permalink to &quot;一、package.json设置&quot;">​</a></h2><p>在文件中加上配置<code>homepage: https://[用户名].github.io/[项目名]</code>（待验证）</p><h2 id="二、设置-personal-token" tabindex="-1">二、设置 Personal Token <a class="header-anchor" href="#二、设置-personal-token" aria-label="Permalink to &quot;二、设置 Personal Token&quot;">​</a></h2><p>从右上角个人设定的 Settings 进入后，点入左边侧栏的 Developer Settings 并点击 Personal access tokens 就可以进入到建立页面 建立页面可以选择这个 token 可触及的相关权限，因为要使用 Actions 所以至少要勾 workflow (勾选 workflow 后会自动勾选第一个 repo 相关) （待验证）</p><h2 id="三、在储存库设定-secrets" tabindex="-1">三、在储存库设定 Secrets <a class="header-anchor" href="#三、在储存库设定-secrets" aria-label="Permalink to &quot;三、在储存库设定 Secrets&quot;">​</a></h2><p>在 Actions 的 yaml 档中会用到刚刚建立的 token，但这并不建议被直接写在 .yaml 中曝光，所以需要到 Secrets 中设定，概念上和 .env 是类似的～ Name 为 ACCESS_TOKEN，value 则是上一个步骤建立的 Personal token，复制贴过来就可以</p><h2 id="四、设定-actions" tabindex="-1">四、设定 Actions <a class="header-anchor" href="#四、设定-actions" aria-label="Permalink to &quot;四、设定 Actions&quot;">​</a></h2><p>这里使用去看github文档，<a href="https://docs.github.com/en/actions" target="_blank" rel="noreferrer">链接</a>，这里参考了一下别人的文件。 部署成功后会生成一个gh-pages分支。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># This is a basic workflow to help you get started with Actions</span></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls when the action will run. </span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;"># Triggers the workflow on push or pull request events but only for the main branch</span></span>
<span class="line"><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#9ECBFF;">main</span></span>
<span class="line"><span style="color:#85E89D;">pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#9ECBFF;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;"># This workflow contains a single job called &quot;build&quot;</span></span>
<span class="line"><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;"># The type of runner that the job will run on</span></span>
<span class="line"><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Steps represent a sequence of tasks that will be executed as part of the job</span></span>
<span class="line"><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;"># Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install &amp; Build</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 執行指令</span></span>
<span class="line"><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">npm install</span></span>
<span class="line"><span style="color:#9ECBFF;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Runs a single command using the runners shell</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JamesIves/github-pages-deploy-action@releases/v4</span></span>
<span class="line"><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">ACCESS_TOKEN</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.ACCESS_TOKEN }}</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># Settings &gt; Secret 建立的 ACCESS_TOKEN，推同個 repo 的話可以不需要</span></span>
<span class="line"><span style="color:#85E89D;">BRANCH</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">gh-pages</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># deploy 到 gh-pages 這個分支</span></span>
<span class="line"><span style="color:#85E89D;">FOLDER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dist</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># build 後的資料夾</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># This is a basic workflow to help you get started with Actions</span></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls when the action will run. </span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#6A737D;"># Triggers the workflow on push or pull request events but only for the main branch</span></span>
<span class="line"><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#032F62;">main</span></span>
<span class="line"><span style="color:#22863A;">pull_request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#032F62;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="color:#22863A;">workflow_dispatch</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#6A737D;"># This workflow contains a single job called &quot;build&quot;</span></span>
<span class="line"><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#6A737D;"># The type of runner that the job will run on</span></span>
<span class="line"><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Steps represent a sequence of tasks that will be executed as part of the job</span></span>
<span class="line"><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#6A737D;"># Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install &amp; Build</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 執行指令</span></span>
<span class="line"><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">npm install</span></span>
<span class="line"><span style="color:#032F62;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Runs a single command using the runners shell</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy</span></span>
<span class="line"><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JamesIves/github-pages-deploy-action@releases/v4</span></span>
<span class="line"><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#22863A;">ACCESS_TOKEN</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.ACCESS_TOKEN }}</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># Settings &gt; Secret 建立的 ACCESS_TOKEN，推同個 repo 的話可以不需要</span></span>
<span class="line"><span style="color:#22863A;">BRANCH</span><span style="color:#24292E;">: </span><span style="color:#032F62;">gh-pages</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># deploy 到 gh-pages 這個分支</span></span>
<span class="line"><span style="color:#22863A;">FOLDER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dist</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># build 後的資料夾</span></span></code></pre></div><h2 id="五、确认" tabindex="-1">五、确认 <a class="header-anchor" href="#五、确认" aria-label="Permalink to &quot;五、确认&quot;">​</a></h2><p>接著只要到 Settings 设定 GitHub Pages 就可以了，把默认分支切到gh-pages。</p><h2 id="六、踩坑" tabindex="-1">六、踩坑 <a class="header-anchor" href="#六、踩坑" aria-label="Permalink to &quot;六、踩坑&quot;">​</a></h2><ol><li>打包路劲使用使用相对路径，使用觉得路径会导致404。方法，在vite.config.js中添加一个<code>base: &#39;./&#39;</code></li><li>路由模式使用history会出现页面空白，使用hash模式解决。方法<code>createWebHistory</code>=&gt;<code>createWebHashHistory</code>，后面研究一下原因。</li></ol>`,15),e=[o];function t(c,r,i,y,E,u){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
