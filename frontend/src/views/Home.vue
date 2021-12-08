<template>
    <div id="home">
        <div class="main_post">
            <div class="main_post_img">
                <img class="main_img" src="../../../public/image/city.jpg">
            </div>
            <div class="main_info_post">
                <h1 class="main_info_headline">Заголовок главной новости страницы!</h1>
                <p class="main_info_text">Текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>
            </div>
        </div>

        <div class="posts">
            <div class="posts_headline_block">
                <h2 class="posts_headline">Выбор редакции</h2>
                <div class="line_headline"></div>
            </div>
        </div>

        <div class="articles">
            <div class="article" v-for="post in posts" v-bind:key="post.id">
                <div class="article_img_block">
                    
                    <img class="article_img" :src="getImgUrl(post.img)" :alt="selectedImage">
                </div>
                <div class="article_headline_block" >
                    <h1 class="article_headline">{{ post.headline }}</h1>
                    <div class="article_date">
                        <h3><span>{{ post.admin }}</span> date {{ getDate(post.createdAt) }}</h3>
                    </div>
                    <div class="article_text"><p>{{ post.text }}</p></div>
                </div>
                
            </div>

            
        

        
        </div>
        

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Post',
    data: () => ({
        selectedImage: null,
        posts: {},
        errors: []
    }),
    methods: {
        getMessage() {
        const path = 'http://localhost:8081/api/posts';
        axios.get(path)
            .then((res) => {
            this.posts = res.data;
            console.log(res.data)
            
            })
            .catch((error) => {
            console.error(error);
            });
        },
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
        getDate(date) {
            let newDate = new Date(date)
            let month, minutes
            if (newDate.getMonth() <= 9) {
                month = "" + 0 + newDate.getMonth()
            } else {
                month = newDate.getMonth()
            }

            if (newDate.getMinutes() <= 9) {
                minutes = "" + 0 + newDate.getMinutes()
            } else {
                minutes = newDate.getMinutes()
            }

            return newDate.getDate() + ":" + month + ":" + newDate.getFullYear() + " " + newDate.getHours() + ":" + minutes
        }
    },
  created() {
    this.getMessage();
  },
}


//axios({
//    url: 'http://localhost:8081/api/posts',
//    method: 'get',
//    headers: {
        
//        'Content-Type': 'application/json'
//    }
//})
//.then(response => {
    
//    console.log(response)
//})
//.catch(err => {
//    console.log(err);
//});



</script>




<style>
    .main_post {
        margin-top: 43px;
        position: relative;
    }

    .main_post_img {
        position: relative;
        overflow:hidden;
        width: 100%;
        height:600px;
    }

    .main_img {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:100%;
        height:700px;
        object-fit:cover;
        
    }
        
    .main_info_post {
        width: 509px;
        position: absolute;
        top: 0px;
        left: 25px;
        background-color: white;
    }

    .main_info_headline {
        font-style: normal;
        font-weight: bold;
        font-size: 33px;
        line-height: 41px;
        color: #000000;
        margin-left: 39px;
        margin-right: 39px;
    }

    .main_info_text {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */


        color: #000000;
        margin-left: 39px;
        margin-right: 39px;
    }

    .posts_headline {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        line-height: 57px;
        text-align: center;

        color: #1C1C1C;
    }

    .line_headline {
        display: block;
        margin: 0 auto;
        width: 190px;
        height: 0px;
        margin-top: 0px;

        border: 5px solid #1C1C1C;
    }

    .articles {
        width: 866px;
        display: block;
        margin: 0 auto;
        
    }

    .article {
        width: 100%;
        
        min-height: 300px;
    }

    .article_img_block {
        position: relative;
        width: 371px;
        height:298px;
        float: left;
    }

    .article_img {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:371px;
        object-fit:cover;
        
    }

    .article_headline_block {
        margin-top: 25px;
        width: 430px;
        float: right;
    }

    .article_headline {
        font-family: Libre Baskerville;
        font-style: normal;
        font-weight: bold;
        font-size: 33px;
        line-height: 41px;
        color: #000000;
        
    }

    .article_date h3{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
    }

    .article_text p{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */


        color: #000000;
    }

    .article_max_block {
        position: relative;
    }

    .article_max_img_block {
        position: relative;
        overflow:hidden;
        width: 100%;
        height:600px;
    }

    .article_max_img {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:100%;
        height:700px;
        object-fit:cover;
    }

    .article_max_text_blog {
        position: absolute;
        right: 78px;
        top: 0px;
        width: 509px;
        background-color: white;
    }

    .article_max_headline {
        font-family: Libre Baskerville;
        font-style: normal;
        font-weight: bold;
        font-size: 33px;
        line-height: 41px;

        color: #000000;
        padding-left: 39px;
        padding-right: 39px;
        text-align: center;
    }

    .article_max_text {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */


        color: #000000;
        padding-left: 39px;
        padding-right: 39px;
        text-align: center;
    }

</style>