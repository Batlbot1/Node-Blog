<template>
    <div id="admin">
    <h1>Admin page</h1>
    <router-link to="Postadd"><img class="add" src="../../../public/image/add.svg"></router-link>
        

    </div>
</template>

<style>

    .add {
        width: 50px;
        height: 50px;
        position: fixed;
        bottom: 50px;
        right: 50px;
    }

    .add:hover {
        cursor: pointer;
        width: 60px;
        height: 60px;
        
        bottom: 45px;
        right: 45px;
    }


</style>