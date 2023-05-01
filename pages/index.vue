<script setup lang="ts">
useHead({
    title: 'Nuxt3 Practice',
    meta: [
        {
            name: 'description',
            content: 'My content description'
        }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [
        {
            children: "console.log('Hello from index.vue')"
        }
    ]
})
</script>
<template>
    <main>
        <h1>Landing page</h1>
    </main>
</template>
<style lang="scss" scoped></style>