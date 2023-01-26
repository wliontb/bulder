<template>
    <ul>
        <li>
            <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/about">About</NuxtLink>
        </li>
    </ul>
</template>
<style scoped>
    ul {
        display: flex;
        list-style-type: none;
        background: #9cf;
        width: 100%;
        padding: 0;
    }

    ul li {
        text-align: center;
        padding: 15px;
        border-right: 1px dashed #fff;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
    }

    a:hover {
        color: red;
    }
</style>