<template>
    <div id="app">
        <ul class="menu">
            <router-link to="/" tag="li" ??>home</router-link>
            <router-link to="/about" tag="li" ??>about</router-link>
            <router-link to="/menu1?name=userName1&age=30" tag="li" ??>menu1(query)</router-link>
            <router-link to="/menu2/userName2/20" tag="li" ??>menu2(params)</router-link>
            <router-link to="/menu2/userName2" tag="li" ??>menu3(params)</router-link>
        </ul>
        <hr/>
        <router-view/>
    </div>
</template>

<style scoped>
    #app {
        text-align: center;
    }

    .menu {
        list-style: none;
    }

    .menu li {
        display: inline-block;
        padding: 10px;
        margin: 10px;
        background: #eeeeee;
        border: 1px solid #000000;
        user-select: none;
    }

    a {
        text-decoration: none;
        cursor: default;

    }

    /* unvisited link */
    a:link {
        color: #282c34;
    }

    /* visited link */
    a:visited {
        color: #282c34;
    }

    /* mouse over link */
    a:hover {
        color: #282c34;
    }

    /* selected link */
    a:active {
        color: #282c34;
    }

    .active {
        color: #ff0000;
    }
</style>
