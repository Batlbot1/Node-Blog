<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios'
import Header from '@/components/header.vue'



@Component({
  components: {
    Header
  },
})


export default class App extends Vue {}


</script>



<style>
    html {
        overflow-x: hidden;
    }

    body {
        margin-left: 35px;
        margin-right: 35px;
    }

    a {
        text-decoration: none;
    }
</style>
