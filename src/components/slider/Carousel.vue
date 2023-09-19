<script setup>

import CarouselItem from './CarouselItem.vue';

const props= defineProps(['slides']);

</script>

<template>
    <div class="carousel">
        <div class="carousel-inner">
            <CarouselItem 
            v-for="(slide, index) in slides" 
            :slide="slide" 
            :key="`item-${index}`">
            </CarouselItem>
        </div>
        <div class="title-container">
            <h1 class="title-home">Schön Sauber</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title-home{
    position:absolute;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    left: 0;
    right: 0;
    color: $white;
    font-size: 40px;
    top:300px;
}
.title-container{
   
    width: 100%;

}
.carousel{
    display: flex;
    justify-content: center;
}

.carousel-inner{
    position:absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    

}
</style>