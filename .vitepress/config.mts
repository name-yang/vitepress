import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "呆呆鹅",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    logo: '/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    search:{
      provider: 'local'
    },
    nav: [
      {
        text: '前端',
        items:[
          {
            text: 'vue',
            link: '/前端/vue'
          },
          {
            text: 'javascript',
            link: '/前端/javascript'
          },
          {
            text: 'typescript',
            link: '/前端/typescript'
          }
        ]
      },
      {
        text: 'Linux',
        items:[
          {
            text: 'arch',
            link: '/linux/arch'
          },
          {
            text: '基础',
            link: '/linux/base'
          }
        ]
      },
      { text: 'English', link: '/markdown-examples' },
      { text: '个人规划', link: '/project/job' },
    ],
    sidebar: {
      '/linux/': [
        {
          collapsed: false,
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: 'TGapi文档',
          items: [
            { text: 'TGapi登陆注册', link: '/item-a' },
            { text: 'Item B', link: '/item-b' },
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/project/': [
        {
          text: '职业',
          items: [
            { text: '工作目标', link: '/markdown-examples' },
            { text: '技术提升', link: '/api-examples' }
          ]
        }
      ]
    },
    editLink:{
      text: '编辑页面',
      pattern: 'https://www.baidu.com/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright ©呆呆鹅",
    },
  }
})
