import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "D&D 5e",
  description: "Custom rules for my d&d campaigns",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Basic Rules', link: '/basic-rules' },
      { text: 'Vampires Campaign', link: '/vampires'}
    ],

    sidebar: [
      {
        text: 'Links',
        items: [
          { text: 'Character Creation', link: '/cc' },
          { text: 'Basic Rules', link: '/basic-rules' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PaulineNemchak/dnd-5e-campaigns' }
    ]
  }
})
