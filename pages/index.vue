<script setup>
definePageMeta({
    middleware: 'auth'
})
// const { sayHello } = useUtils()
// const { $sayHello } = useNuxtApp()

</script>
<template>
    <main>
        <h1>Landing page</h1>
        <ContentDoc />
    </main>
</template>



<style lang="scss" scoped></style>