import { _backgroundColor } from "#tailwind-config/theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",

  ],
  colorMode: {
    preference: 'dark'
  },
  /*loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },*/

  ui: {
    safelistColors: ['blue', 'white'/*safe custom colors*/]
  }

})