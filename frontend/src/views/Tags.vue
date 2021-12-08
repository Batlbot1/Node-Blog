<template>
    <div id="tags">
        <div class="search_block">
            <input type="search" class="search" placeholder="Поиск по тегу">
        </div>

        <div class="list_tags">
            <a href="/login"><button class="btn_link_tags">#Tags One</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags two</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags three</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags four</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags four</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags four</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags four</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags three</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags four</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags four</button></a>
            <a href="/login"><button class="btn_link_tags">#Tags four</button></a>
        </div>
    </div>
</template>

<style>

    .list_tags {
        width: 707px;
        display: block;
        margin: 0 auto;
        margin-top: 59px;
        text-align: center;
    }

    .btn_link_tags {
        padding: 10px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: Transparent;
        margin: 15px;
        
    }

    .btn_link_tags:hover {
        background-color: #1C1C1C;
        color: white;
        transition: 0.3s;
    }

    .search_block {
        width: 707px;
        height: 60px;
        display: block;
        margin: 0 auto;
        margin-top: 282px;
    }

    .search {
        width: 707px;
        height: 60px;
        border: 1px solid #000000;
        padding-left: 25px;
        border-radius: 25px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 22px;

        color: rgba(0, 0, 0, 0.5);
    }

    .search:active, .search:hover, .search:focus {
        outline: 0;
        outline-offset: 0;
    }

    .search input[type="text"] {
        padding: 25px;
        }


</style>