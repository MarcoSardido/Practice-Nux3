<script setup>
// definePageMeta({
//     middleware: 'auth'
// })

// const { sayHello } = useUtils()
// const { $sayHello } = useNuxtApp()

const counter = useCounter(100)

</script>
<template>
    <main>
        <h1>Landing page</h1>
        <!-- <ContentDoc /> -->
        <h1>Count: {{ counter }}</h1>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>

        <hr>
        <div>
            <Counter />
        </div>
    </main>
</template>



<style lang="scss" scoped></style>