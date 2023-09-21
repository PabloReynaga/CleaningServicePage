<script setup lang="ts">

import { onBeforeUnmount, onMounted, ref } from 'vue';
import CarouselItem from './CarouselItem.vue';

const props = defineProps({
    slides: {
        type: Array,
        default: [],
        required: true
    }
});
const currentSlide = ref(0);
const slideInterval = ref(0);

function SetCurrentSlide(index){
    currentSlide.value = index;

}

onMounted(()=>{
    slideInterval.value = setInterval(()=>{
        const index = currentSlide.value < props.slides.length -1 ? currentSlide.value + 1 : 0; 
        SetCurrentSlide(index);
    }, 3000)

})
onBeforeUnmount(()=>{
    clearInterval(slideInterval.value)

})
</script>

<template>
    <div class="carousel">
        <div class="carousel-inner">
            <CarouselItem 
            v-for="(slide, index) in slides" 
            :slide="slide" 
            :key="`item-${index}`"
            :current-slide="currentSlide"
            :index="index">
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