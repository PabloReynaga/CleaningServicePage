<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="main-container">
            <div class="links-container">
                <a href="#home" class="links">Home</a>
                <a href="" class="links">Datenschutz</a>
                <router-link to="/impressum" class="links">Impressum</router-link>
            </div>
        <div class="separate-line"></div>
        
    </div>
    <div class="text-container">
            <p class="text">
                Copyright © 2023 Multi Clean Company | Developed By Foreach Powered by: Vue.js
            </p>
            
    </div>

</template>
<style lang="scss" scoped>
.main-container{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $white;
    height: 10vh;
    border-top: 1px solid $grey; 
    border-bottom: 1px solid $grey; 
   
}
.links{
    display: flex;
    text-decoration: none;
    color: $black;
    padding: 15px;
    margin: 15px;
        
}
.links:hover{
    text-decoration:underline;
}
.links-container{
    display: flex;
}

.text-container{
    display: flex;
    padding: 10px;
    text-align: left;
    margin: auto;
    width: 100%;
    margin-bottom: 0px;
    justify-content: center;
    color: $black;
    font-size: 14px;
    
}
.text{
    font-size: 14px;
}
@media only screen and (width > 1000px){
   
  .links{
    width: 30%;
  }
}

</style>