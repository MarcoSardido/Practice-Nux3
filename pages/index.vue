<script setup>
// definePageMeta({
//     middleware: 'auth'
// })

// const { sayHello } = useUtils()
// const { $sayHello } = useNuxtApp()

// useState Nuxt3 - State management
// const counter = useCounter(100)

// Pinia State management
import { useCounterStore } from '~/stores/myStore'
const store = useCounterStore()
console.log(store)
</script>
<template>
    <main>
        <h1>Landing page</h1>
        <!-- <ContentDoc /> -->
        <h1>Pinia State management</h1>
        <h3>Count: {{ store.count }}</h3>
        <h3>Getters: {{ store.doubleCount }}</h3>
        <button @click="store.increment">+</button>
        <button @click="store.$reset">Reset Pinia</button>

        <hr>
        <div>
            <h1>useStore State management</h1>
            <Counter />
        </div>
    </main>
</template>



<style lang="scss" scoped></style>