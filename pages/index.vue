<script setup>
const res = await $fetch('/api/hello')
console.log(res)
</script>
<template>
    <main>
        <h1>Landing page</h1>
    </main>
</template>



<style lang="scss" scoped></style>