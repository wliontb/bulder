<template>
    <div class="container">
        <div class="row">
            <AdminHeader></AdminHeader>
        </div>
        <div class="row">
            <div class="col-2">
                <AdminLeftBar></AdminLeftBar>
            </div>
            <div class="col-7">
                <slot />
            </div>
            <div class="col-3">
                <AdminRightBar></AdminRightBar>
            </div>
        </div>
    </div>
</template>
<style>
    body {
        background: #ccc;
        font-family: 'Oswald', sans-serif;
    }

    .row {
        display: flex;
    }

    .col-2 {
        width: 5%;
        margin-top: -16px;
    }

    .col-3 {
        width: 20%;
        margin-left: auto;
    }

    .col-7 {
        padding: 3%;
    }
</style>
<script setup>
    useHead({
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
            }
        ]
    })
</script>