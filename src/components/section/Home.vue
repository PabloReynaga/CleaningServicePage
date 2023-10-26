<script setup>
import Carousel from '../slider/Carousel.vue';
import { gsap } from 'gsap'  

import { onMounted, ref } from 'vue';
import Photo1 from './../img/photo1.png';
import Photo2 from './../img/photo2.png';
import Photo3 from './../img/photo3.png';
import Photo4 from './../img/photo4.png';


let slides = [ Photo1,Photo2,Photo3,Photo4]

const animation = ref(null)

onMounted(()=>{
        gsap.from(animation.value,{
         duration: 1.5,
         autoAlpha: 0,
         ease: "Power2.out"
                
        })
})

</script>
<template> 
        <div class="container" ref="animation">
                <Carousel :slides="slides"></Carousel>
        </div>
</template>
<style scoped lang="scss">

</style>