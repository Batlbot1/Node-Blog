<template>
    <div id="about">
        

        <div class="logo_center">
            <div class="logo_block">

            </div>
            <div class="logo_text_block">
                <h2 class="logo_text">
                <span style="color:white;">бл</span>ог о путешествиях.
                </h2>
            </div>
            
        </div>

        <div class="logo_text_info">
                <h2>A publishing company that focuses on the essentials.</h2>
        </div>

        <div class="bg_info">
            <div class="line_1"></div>
            <div class="line_2"></div>
            <div class="bg_info_text_1">
                <h2>We tell stories that drives the heart.</h2>
                <p>
                    Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.
                </p>
            </div>
            <div class="bg_info_img_block_1">
                <img class="bg_info_img_1" src="../../../public/image/main.jpeg">
            </div>

            <div class="bg_info_img_block_2">
                <img class="bg_info_img_2" src="../../../public/image/info_1.jpeg">
            </div>
            <div class="bg_info_text_2">
                <h2>We tell stories that drives the heart.</h2>
                <p>
                    Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.
                </p>
            </div>
        </div>

    </div>
</template>

<style>

    .bg_info_img_block_1 {
        position: relative;
        top: 146px;
        right: 85px;
        margin-left: auto;
        overflow:hidden;
        width: 569px;
        height:419px;
    }

    .bg_info_img_1 {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:569px;
        height:419px;
        object-fit:cover;
    }

    .bg_info_img_block_2 {
        position: relative;
        top: 0px;
        right: 361px;
        margin-left: auto;
        overflow:hidden;
        width: 569px;
        height:419px;
    }

    .bg_info_img_2 {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:569px;
        height:419px;
        object-fit:cover;
    }

    .logo_center {
        width: 320px;
        position: relative;
        height: 57px;
        display: block;
        margin: 0 auto;
        margin-top: 200px;
    }

    .logo_center .logo_block {
        width: 58px;
        height: 57px;
        background-color: #1C1C1C;
        float: left;
    }

    .logo_text_info h2 {
        font-size: 20px;
        /* or 150% */

        color: #000000;
        text-align: center;
    }

    .bg_info {
        position: relative;
        width: 100%;
        
        background: #1C1C1C;
        color: #FFFFFF;
        margin-top: 200px;
        padding-bottom: 450px;
    }

    .line_1 {
        position: absolute;
        width: 8px;
        height: 1016px;
        top: 0px;
        right: 194px;

        background: #FFFFFF;
    }

    .line_2 {
        position: absolute;
        width: 8px;
        height: 600px;
        left: 160px;
        top: 657px;

        background: #FFFFFF;
    }

    .bg_info_text_1 {
        position: absolute; left: 96px; top: 102px;
        width: 444px;
    }

    .bg_info_text_1 h2 {
        font-family: Libre Baskerville;
        font-style: normal;
        font-weight: normal;
        font-size: 42px;
        line-height: 52px;
    }

    .bg_info_text_1 p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
    }

    .bg_info_text_2 {
        position: absolute; left: 420px;
        width: 444px;
    }

    .bg_info_text_2 h2 {
        font-family: Libre Baskerville;
        font-style: normal;
        font-weight: normal;
        font-size: 42px;
        line-height: 52px;
    }

    .bg_info_text_2 p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
    }


</style>