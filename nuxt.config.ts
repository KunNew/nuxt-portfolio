// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode","@nuxt/image-edge","@nuxt/content"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
  content: {
    markdown: {
     toc: {
         depth:3,
         searchDepth:3
     },
    },
    highlight: {
     theme: "dracula-soft"
    }
   }
  
});
