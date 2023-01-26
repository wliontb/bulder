// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        server: {
            watch: {
                usePolling: true,
            }
        }
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        'normalize.css/normalize.css'
    ],
    build: {
        transpile: [
            "@fortawesome/vue-fontawesome",
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-solid-svg-icons"
        ],
    },
})
