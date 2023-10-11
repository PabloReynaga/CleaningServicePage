<script setup>
import NavBar from './components/NavBar.vue';
import "../src/assets/main.scss"
import Page from './components/page/Page.vue'
import Impressum from './components/page/impressum.vue';
import { computed, ref } from 'vue';



</script>

<template>
  <header>
       <NavBar/>
  </header>
  
  <router-view/>


</template>
