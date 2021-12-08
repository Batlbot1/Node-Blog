<template>
    <div class="login">
        <div class="welcome_text">
            <h1 class="welcome_headline">Вас приветствует ваш персональный блог!</h1>
            <p class="weclome_text_line">Рады видеть вас снова!</p>
        </div>
        <form>
            <div class="form_login">
                <svg class="login_name_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#1C1C1C" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#1C1C1C" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input class="form_name" type="name" name="name" placeholder="Ваше имя!"><br>

                <svg class="login_pass_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 7.5L19 4M21 2L19 4L21 2ZM11.39 11.61C11.9064 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.0271 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3355 18.2919 11.9291 18.9012 11.4162 19.4141C10.9033 19.9271 10.294 20.3334 9.62333 20.6099C8.95271 20.8864 8.23403 21.0275 7.50866 21.025C6.7833 21.0226 6.06557 20.8767 5.39682 20.5958C4.72807 20.3148 4.1215 19.9043 3.61203 19.388C2.61016 18.3507 2.05579 16.9614 2.06832 15.5193C2.08085 14.0772 2.65928 12.6977 3.67903 11.678C4.69877 10.6583 6.07824 10.0798 7.52032 10.0673C8.96241 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5L11.39 11.61ZM15.5 7.5L18.5 10.5L22 7L19 4L15.5 7.5Z" stroke="#1C1C1C" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <input class="form_pass" type="password" name="password" placeholder="Ваш пароль!">
                <p><input type="checkbox"> Запомнить пароль</p>
                <!--<a href="#">Забыл пароль</a>-->
                <button class="btn_link_login">Войти</button>
            </div>
            
        </form>
    </div>
</template>

<style>

    .btn_link_login {
        width: 321px;
        padding: 10px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: Transparent;
    }

    .btn_link_login:hover {
        background-color: #1C1C1C;
        color: white;
        transition: 0.3s;
    }

    .form_name:active, .form_name:hover, .form_name:focus {
            outline: 0;
            outline-offset: 0;
    }

    .form_pass:active, .form_pass:hover, .form_pass:focus {
            outline: 0;
            outline-offset: 0;
    }

    .form_login {
        position: relative;
    }

    .login_name_icon {
        position: absolute;
        top: 25px; left: 15px;
    }

    .login_pass_icon {
        position: absolute;
        top: 105px; left: 15px;
    }

    .form_login {
        width: 324px;
        display: block;
        margin: 0 auto;

    }

    .form_name {
        width: 260px;
        height: 58px;
        margin-top: 7px;
        margin-bottom: 7px;
        padding-left: 55px;

        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */


        color: rgba(28, 28, 28, 0.5);

        background: #F8F8F8;
        border-radius: 10px;
    }

    .form_pass {
        width: 260px;
        height: 58px;
        margin-top: 7px;
        margin-bottom: 7px;
        padding-left: 55px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */


        color: rgba(28, 28, 28, 0.5);

        background: #F8F8F8;
        border-radius: 10px;
    }

    .welcome_text {
        margin-top: 165px;
    }

    .welcome_headline {
        font-family: Libre Baskerville;
        font-style: normal;
        font-weight: bold;
        font-size: 33px;
        line-height: 41px;
        text-align: center;

        color: #000000;
    }

    .weclome_text_line {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */

        text-align: center;

        color: #000000;
    }

</style>