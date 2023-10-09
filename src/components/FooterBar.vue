<script setup>
</script>
<template>
    <div class="main-container">
        <div class="links-container">
            <a href="#home" class="links">Home</a>
            <a href="" class="links">Datenschutz</a>
            <a href="" class="links">Impressum</a>
        </div>
        <div class="separate-line"></div>
        <div class="text-container">
            <p class="text">
                Copyright © 2023 Multi Clean Company | Developed By Foreach Powered by: Vue.js
            </p>
            
        </div>
    </div>

</template>
<style lang="scss" scoped>
.main-container{
    display: flex;
    background-color: $grey;
    height: 30vh;
   
}
.links{
    display: flex;
    text-decoration: none;
    color: $black;
    padding: 15px;
    margin: 15px;

}
.separate-line{
    border: 1px solid $white;
    height: 100%;
}
.text-container{
    display: flex;
    padding: 10px;
    text-align: center;
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
</style>