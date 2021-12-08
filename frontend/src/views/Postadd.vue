<template>
    <div id="postadd">
    <h1>Добавить новую запись</h1>
        <form class="review-form" @submit.prevent="onSubmit">
        <p>
            <label>Заголовок:</label><br>
            <input id="headline" v-model="headline" placeholder="Заголовок"><br>
            <input id="img" v-model="img" placeholder="картинка"><br>
            <input id="admin" v-model="admin" placeholder="Администратор"><br>
        </p>


        <p>
            <input type="submit" value="Submit">  
        </p>

        </form>
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