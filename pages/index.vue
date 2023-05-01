<script setup>
const { data: productCount, pending, refresh } = await useAsyncData('products',async () => await $fetch('/api/products'))
const refreshData = () => refresh()
</script>
<template>
    <main>
        <h1>Landing page</h1>
        <p>{{ pending ? 'Loading...' : productCount }}</p>
        <button @click="refreshData">Refresh</button>
    </main>
</template>
<style lang="scss" scoped></style>