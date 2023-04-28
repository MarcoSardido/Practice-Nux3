// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
    alias: {
        // '@': resolve(__dirname, '/')
        assets: '/<rootDir>/assets'
    },
    modules: ['@nuxt/content'],
    css: ['~/assets/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
