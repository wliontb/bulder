<template>
    <ul>
        <li><NuxtLink to="/create">Create new DOM</NuxtLink></li>
        <li><NuxtLink to="/edit">Edit DOM</NuxtLink></li>
        <li><a href="#">3 item</a></li>
        <li><a href="#">4 item</a></li>
        <li><a href="#">5 item</a></li>
    </ul>
</template>
<style scoped>
    ul {
        display: flex;
        flex-direction: column;
        background: #369;
        list-style: none;
        padding: 0;
    }

    ul li {
        padding: 15px 5px;
        border-bottom: 1px solid #ccc;
    }

    ul li a {
        text-decoration: none;
        color: #fff;
    }
</style>