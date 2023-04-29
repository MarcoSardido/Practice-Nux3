<script setup>
const counter = useCounter()
</script>
<template>
    <div>
        <h1>Count: {{ counter }}</h1>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
</template>



<style lang="scss" scoped></style>