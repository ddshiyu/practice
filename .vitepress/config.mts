import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的知识行囊",
  description: "A VitePress Site",
  base: '/practice/',
  srcDir: './src',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Wollfy Feng'
    },
    nav: [
      { text: 'CSS', link: '/css/yuedu' },
      { text: 'JavaScript', link: '/js/jicheng.md' },
      { text: 'Tools', link: '/tools/index.md' },
      { text: 'Java', link: '/java/index.md' },
      { text: '经验教训', link: '/keng/vue3.md' },
      { text: '英语', link: '/english/index.md' },
    ],

    sidebar: {
      "/css/": [{
        text: 'CSS',
        items: [
          { text: '读css世界', link: '/css/yuedu' },
          { text: 'css技巧', link: '/css/jiqiao' },
          { text: 'svg', link: '/css/index' },
        ]
      }],
      "/js/": [{
        text: 'JavaScript',
        items: [
          { text: 'js继承', link: '/js/jicheng.md' },
          { text: 'TS相关', link: '/js/ts.md' },
          { text: 'JS非常用方法', link: '/js/feichangyong.md' },
        ]
      }],
      "/tools/": [{
        text: 'Tools',
        items: [
          { text: '软件工具集合', link: '/tools/software.md' },
          { text: 'git', link: '/tools/git.md' },
          { text: 'vitepress', link: '/tools/markdown-examples.md' },
          { text: 'vite', link: '/tools/index.md' },
          { text: 'npm', link: '/tools/npm.md' },
          { text: 'github copilot', link: '/tools/copilot.md' },
          { text: 'editorConfig', link: '/tools/editorConfig.md' },
          { text: 'githubActions', link: '/tools/githubActions.md' },
          { text: 'webviz', link: '/tools/webviz.md' },
          { text: '图床', link: '/tools/tuchaung.md' },
        ]
      }],
      "/java/": [{
        text: 'Java',
        items: [
          { text: 'java基础', link: '/java/index.md' },
        ]
      }],
      "/keng/": [{
        text: '经验教训',
        items: [
          { text: 'vue3', link: '/keng/vue3.md' },
          { text: '可视化方案', link: '/keng/didaima.md' },
          { text: '部署上线', link: '/keng/shangxian.md' },
        ]
      }],
      "/english/": [{
        text: '英语',
        items: [
          { text: '前言', link: '/english/index.md' },
          { text: '系动词', link: '/english/xidongci.md' },
          { text: '使役动词', link: '/english/shiyidongci.md' },
          { text: '冠词', link: '/english/guanci.md' },
          { text: '介词', link: '/english/jieci.md' },
          { text: '名词', link: '/english/mingci.md' },
          { text: '构词', link: '/english/gouci.md' },
        ]
      }],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
