<script setup>
import Carousel from '../slider/Carousel.vue';

let slides = [ '/src/components/img/photo1.png',
               '/src/components/img/photo2.png', 
               '/src/components/img/photo3.png',
               '/src/components/img/photo4.png' 
            ]

</script>
<template> 
        <div class="container">
                <Carousel :slides="slides"></Carousel>

        </div>

        

</template>
<style scoped lang="scss">
.container{
   
        
        
}
</style>