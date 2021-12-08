<template>
    <header>
        <div class="navigation">
            <div class="left_nav">
                <div class="logo">
                    <div class="logo_block">

                    </div>
                    <div class="logo_text_block">
                        <h2 class="logo_text">
                        <span style="color:white;">бл</span>ог о путешествиях.
                        </h2>
                    </div>
                </div>

                <div class="nav_links">
                    <ul class="block_nav_links">
                        <li><router-link to="/">Главная</router-link></li>
                        <li><router-link to="/tags">Тэги</router-link></li>
                        <li><router-link to="/about">О нас</router-link></li>
                        <li><router-link to="/admin">Admin</router-link></li>
                    </ul>
                </div>
                
            </div>
            <div class="right_nav">
                <router-link to="/login"><button class="btn_link">
                    Войти
                </button></router-link>
            </div>
        </div>
        
        
    </header>
</template>

<style>
    header {
        width: 100%;
        height: 57px;
        
    }

    .navigation {
        width: 100%;
        height: 57px;
        
    }

    .left_nav,
    .right_nav {
        height: 57px;
        display: inline-block;
    }

    .right_nav {
        position: relative;
        right: 0px;
        float: right;
    }

    .logo {
        position: relative;
        height: 57px;
    }

    .logo,
    .nav_links {
        display: inline-block;
    }

    .logo_block {
        width: 58px;
        height: 57px;
        background-color: #1C1C1C;
        float: left;
    }

    .logo_text {
        white-space: nowrap;
        font-weight: bold;
        font-size: 30px;
        position: relative;
        left: -30px;
    }

    .block_nav_links li {
        display: inline;
        list-style-type: none;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        color: #000000;
        margin-left: 15px;
        margin-right: 15px;
    }

    .btn_link {
        padding: 10px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: Transparent;
        position: absolute;
        bottom: 0px;
        right: 0px;
    }

    .btn_link:hover {
        background-color: #1C1C1C;
        color: white;
        transition: 0.3s;
    }
</style>