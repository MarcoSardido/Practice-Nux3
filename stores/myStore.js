export const useCounterStore = defineStore('counter', () => {
    // States
    const count = ref(0)
    const name = ref('Eduardo')

    // Getters
    const doubleCount = computed(() => count.value * 2)

    // Actions
    function increment() {
        count.value++
    }

    function $reset() {
        count.value = 0
      }

    return { count, name, doubleCount, increment, $reset }
})