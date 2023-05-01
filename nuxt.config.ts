// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Global Title',
            meta: [
                {
                    name: 'description',
                    content: 'app description'
                }
            ]
        }
    },
    alias: {
        // '@': resolve(__dirname, '/')
        assets: '/<rootDir>/assets'
    },
    modules: ['@nuxt/content', '@pinia/nuxt',],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    css: ['~/assets/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    routeRules: {
        // // Static page generated on-demand, revalidates in background
        // '/blog/**': { swr: true },
        // // Static page generated on-demand once
        // '/articles/**': { static: true },
        // // Set custom headers matching paths
        // '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
        // // Render these routes with SPA
        // '/admin/**': { ssr: false },
        // // Add cors headers
        // '/api/v1/**': { cors: true },
        // // Add redirect headers
        // '/old-page': { redirect: '/new-page' },
        // '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }
    }
})
