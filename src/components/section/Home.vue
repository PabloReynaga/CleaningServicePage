<script setup>
import Carousel from '../slider/Carousel.vue';
import { gsap } from 'gsap'  
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';


let slides = [ '/src/components/img/photo1.png',
               '/src/components/img/photo2.png', 
               '/src/components/img/photo3.png',
               '/src/components/img/photo4.png' 
]

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