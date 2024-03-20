import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import sidebarConfig from './sideBar'
console.log(JSON.stringify(sidebarConfig))
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的知识行囊",
  description: "A VitePress Site",
  base: '/practice/',
  srcDir: './src',
  lastUpdated: true,
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    outline: 'deep',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Wollfy Feng'
    },
    nav: [
      { text: '前端', link: '/frontend/js/jicheng.md' },
      { text: '后端', link: '/backend/java.md' },
      { text: '工具', link: '/tools/index.md' },
      { text: '经验教训', link: '/keng/vue3.md' },
      { text: '英语', link: '/english/index.md' },
    ],
    sidebar: sidebarConfig,
    // sidebar: {
    //   "frontend": [
    //     {
    //       text: 'CSS',
    //       items: [
    //         { text: '读css世界', link: '/frontend/css/yuedu' },
    //         { text: 'css技巧', link: '/frontend/css/jiqiao' },
    //         { text: 'svg', link: '/frontend/css/index' },
    //         { text: '盒模型', link: '/frontend/css/hemoxing' },
    //       ]
    //     },
    //     {
    //       text: 'JavaScript',
    //       items: [
    //         { text: 'js继承', link: '/frontend/js/jicheng.md' },
    //         { text: 'TS相关', link: '/frontend/js/ts.md' },
    //         { text: 'JS非常用方法', link: '/frontend/js/feichangyong.md' },
    //       ]
    //     },
    //     {
    //       text: '小程序',
    //       items: [
    //         { text: '小程序笔记', link: '/frontend/miniProgram/xiaochengxubiji.md' },
    //       ]
    //     }
    //   ],
    //   "/tools/": [{
    //     text: 'Tools',
    //     items: [
    //       { text: '软件工具集合', link: '/tools/software.md' },
    //       { text: 'git', link: '/tools/git.md' },
    //       { text: 'vitepress', link: '/tools/markdown-examples.md' },
    //       { text: 'vite', link: '/tools/index.md' },
    //       { text: 'npm', link: '/tools/npm.md' },
    //       { text: 'github copilot', link: '/tools/copilot.md' },
    //       { text: 'editorConfig', link: '/tools/editorConfig.md' },
    //       { text: 'githubActions', link: '/tools/githubActions.md' },
    //       { text: 'webviz', link: '/tools/webviz.md' },
    //       { text: '图床', link: '/tools/tuchaung.md' },
    //       { text: '搜索技巧', link: '/tools/sousuo.md' },
    //     ]
    //   }],
    //   "/backend/": [{
    //     text: '后端',
    //     items: [
    //       { text: 'java基础', link: '/backend/index.md' },
    //       { text: 'Node.js', link: '/backend/node.md' },
    //       { text: 'mongoDB', link: '/backend/mongo.md' },
    //     ]
    //   }],
    //   "/keng/": [{
    //     text: '经验教训',
    //     items: [
    //       { text: 'vue3', link: '/keng/vue3.md' },
    //       { text: '可视化方案', link: '/keng/didaima.md' },
    //       { text: '部署上线', link: '/keng/shangxian.md' },
    //     ]
    //   }],
    //   "/english/": [{
    //     text: '英语',
    //     items: [
    //       { text: '前言', link: '/english/index.md' },
    //       { text: '系动词', link: '/english/xidongci.md' },
    //       { text: '使役动词', link: '/english/shiyidongci.md' },
    //       { text: '冠词', link: '/english/guanci.md' },
    //       { text: '介词', link: '/english/jieci.md' },
    //       { text: '名词', link: '/english/mingci.md' },
    //       { text: '构词', link: '/english/gouci.md' },
    //       { text: '代词', link: '/english/daici.md' },
    //       { text: '数词', link: '/english/shuci.md' },
    //       { text: '连词', link: '/english/lianci.md' },
    //       { text: '副词', link: '/english/fuci.md' },
    //       { text: '虚拟语气', link: '/english/xuniyuqi.md' },
    //     ]
    //   }],
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
