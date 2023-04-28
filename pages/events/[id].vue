<script setup>
const route = useRoute();
const { id } = route.params
</script>
<template>
    <div>
        Event Details ID: {{ id }}
    </div>
</template>



<style lang="scss" scoped></style>