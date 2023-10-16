<script setup>

import PhotosPres from '../PhotosPres.vue';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';


const textoRight = ref(null);
const textoLeft = ref(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
    gsap.from(textoLeft.value,{
        scrollTrigger:{
          trigger: textoLeft.value,
          toggleActions:"restart none none none",
        },
        delay: 0.1,
        duration: 2,
        x:300
    }), 
    gsap.from(textoRight.value,{
        scrollTrigger:{
          trigger: textoRight.value,
          toggleActions:"restart none none none"
        },
        delay: 0.1,
        duration: 2,
        x:-300
    })
})

</script>
<template>

<div class="main-container" >
    <div class="container" ref="textoRight" >
        <h1 class="title">Über uns</h1>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque ad assumenda mollitia ea eaque laboriosam amet dignissimos, quibusdam aliquam consequatur sapiente dolorem culpa, vero, ipsum eveniet dicta veritatis eum!0</p>
    </div>
    <div class="container" ref="textoLeft" >
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
@media only screen and (width <= 400px ){
    .title{
        
    }
}


</style>