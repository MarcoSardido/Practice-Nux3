<script setup>
// const { sayHello } = useUtils()
const { $sayHello } = useNuxtApp()
$sayHello('Nuxt App!')
</script>
<template>
    <main>
        <h1>Landing page</h1>
        <IconsBell />
    </main>
</template>



<style lang="scss" scoped></style>