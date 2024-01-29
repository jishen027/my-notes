import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'VuePress',
  description: 'Vue-powered Static Site Generator',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'author', content: 'Evan You' }],
  ],
})