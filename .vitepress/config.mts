import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的知识行囊",
  description: "A VitePress Site",
  base: '/practice/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'CSS', link: '/css/yuedu' },
      { text: 'JavaScript', link: '/js/jicheng.md' },
      { text: 'Tools', link: '/tools/index.md' },
      { text: 'Java', link: '/java/index.md' },
    ],

    sidebar: {
      "/css/": [{
        text: 'CSS',
        items: [
          { text: '读css世界', link: '/css/yuedu' },
          { text: 'css技巧', link: '/css/jiqiao' },
        ]
      }],
      "/js/": [{
        text: 'JavaScript',
        items: [
          { text: 'js继承', link: '/js/jicheng.md' },
          { text: 'TS相关', link: '/js/ts.md' },
        ]
      }],
      "/tools/": [{
        text: 'tools',
        items: [
          { text: 'vite相关配置', link: '/tools/index.md' },
          { text: 'npm相关', link: '/tools/npm.md' },
        ]
      }],
      "/java/": [{
        text: 'tools',
        items: [
          { text: 'java学习', link: '/java/index.md' },
        ]
      }],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
