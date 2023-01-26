<template>
    <div class="right-bar">
        <button @click="increment">Increment</button>
        <br>
        <h2>{{ hehe.count }}</h2>
    </div>
</template>
<script setup>
    const data = ref({
        count: 0,
        text: 'hehe'
    });

    function increment() {
        data.value.count++
    }

    const hehe = data;
</script>
<style>
    .right-bar {
        border-left: 1px solid #000;
        height: 300%;
    }
</style>