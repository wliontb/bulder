<template>
    <ul>
        <li>
            <a href="#">
                <font-awesome-icon icon="fa-solid fa-cube" />
                <p>
                    Template
                </p>
            </a>
        </li>
        <li class="active">
            <a href="#">
                <font-awesome-icon icon="fa-solid fa-cube" />
                <p>Text</p>
            </a>
        </li>
        <li>
            <a href="#">
                <font-awesome-icon icon="fa-solid fa-cube" />
                <p>Element</p>
            </a>
        </li>
        <li>
            <a href="#">
                <font-awesome-icon icon="fa-solid fa-cube" />
                <p>Button</p>
            </a>
        </li>
        <li>
            <a href="#">
                <font-awesome-icon icon="fa-solid fa-cube" />
                <p>Animation</p>
            </a>
        </li>
    </ul>
</template>
<style scoped>
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        flex-direction: column;
        background: #000;
        align-items: flex-start;
        height: 300%;   
    }

    ul li {
        padding: 15px;
        font-size: small;
    }

    li:hover, li.active {
        border-left: 3px solid #ccc;
    }

    a {
        text-decoration: none;
        color: #ccc;
    }
</style>
