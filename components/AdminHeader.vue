<template>
    <div class="menu">
        <div class="flex-left">
            <div class="logo">
                <img src="https://i.imgur.com/YAKS9S0.png" alt="">
            </div>
            <div class="bar">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </div>
            <div class="resize button">
                <font-awesome-icon icon="fa-solid fa-minimize" /> Resize
            </div>
            <div class="title">
                Buld - Tool modify DOM
            </div>
        </div>
        <div class="flex-right">
            <div class="comment button">
                <font-awesome-icon icon="fa-solid fa-comment" />
            </div>
            <div class="ad-serving button">
                <font-awesome-icon icon="fa-solid fa-bullhorn" /> Ad Serving
            </div>
            <div class="share button">
                <font-awesome-icon icon="fa-solid fa-users" /> Share
            </div>
            <div class="down button">
                <font-awesome-icon icon="fa-solid fa-download" />
            </div>
        </div>
    </div>
</template>
<style scoped>
    .menu {
        display: flex;
        background: #fff;
        height: 55px;
        width: 100%;
    }

    .flex-left, .flex-right {
        display: flex;
    }

    .flex-left div, .flex-right div {
        padding: 10px;
        display: flex;
        align-items: center;
    }

    .flex-right {
        margin-left: auto;
    }

    .logo {
        width: 5%;
    }

    .button {
        background: #ccc;
        border-radius: 8px;
        font-weight: bold;
        padding: 6px !important;
        margin: 10px;
    }

    .down {
        background: #9cf;
        color: #fff;
    }

    img {
        max-width: 100%;
    }

    .logo img {
        width: 75%;
    }
</style>