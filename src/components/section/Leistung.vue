<script setup>
import { ref } from 'vue';
import PhotosPres from '../PhotosPres.vue';
import {useMotion} from '@vueuse/motion'

const effect = ref();

useMotion(effect,{
    initial:{
        opacity:0,
        y:100,
        transition: 2,
        delay: "200"

    },visibleOnce:{
        opacity: 1,
        y:0,
        
    }
})

</script>
<template>

<div class="main-container">
    <div class="container" ref="effect">
        <h1 class="title">Über uns</h1>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque ad assumenda mollitia ea eaque laboriosam amet dignissimos, quibusdam aliquam consequatur sapiente dolorem culpa, vero, ipsum eveniet dicta veritatis eum!0</p>
    </div>
    <div class="container" ref="effect">
        <h1 class="title">Leistung</h1>
        <p class="text botton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque ad assumenda mollitia ea eaque laboriosam amet dignissimos, quibusdam aliquam consequatur sapiente dolorem culpa, vero, ipsum eveniet dicta veritatis eum!0</p>
    </div>
    <div class="photos-container">
        <PhotosPres></PhotosPres>
        
    </div>
</div>

</template>
<style lang="scss" scoped>

.main-container{
    
}
.title{
    justify-content: center;
    display: flex;
    padding-top: 25px ;
}
.text{
    display: flex;
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    line-height: 1.8;
    text-align: center;
    
}



</style>