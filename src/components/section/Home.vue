<script setup>
import Carousel from '../slider/Carousel.vue';


let slides = [ '/src/components/img/photo1.png',
               '/src/components/img/photo2.png', 
               '/src/components/img/photo3.png' 
            ]



</script>
<template>
    
        <Carousel :slides="slides"></Carousel>


</template>
<style scoped lang="scss">




</style>