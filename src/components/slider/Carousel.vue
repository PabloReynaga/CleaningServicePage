<script setup lang="ts">

import { onBeforeUnmount, onMounted, ref } from 'vue';
import CarouselItem from './CarouselItem.vue';
import CarouselControls from './CarouselControls.vue';

const currentSlide = ref(0);
const slideInterval = ref(0);
const direction = ref("right");

const props = defineProps({
    slides: {
        type: Array,
        default: [],
        required: true
    }
});

function SetCurrentSlide(index){
    currentSlide.value = index;

}
function startSlideTimer(){
    stopSlideTimer();
    slideInterval.value = setInterval(()=>{
        _next();
    }, 5000)
}
function stopSlideTimer(){
    clearInterval(slideInterval.value)
}

onMounted(()=>{
    startSlideTimer();
})

function prev(){
        const index = currentSlide.value > 0 ? currentSlide.value - 1 : props.slides.length - 1; 
        SetCurrentSlide(index);
        direction.value = "left" 
        startSlideTimer();
}
function _next(){
    const index = currentSlide.value < props.slides.length -1 ? currentSlide.value + 1 : 0; 
        SetCurrentSlide(index); 
        direction.value = "right"

}
function next(){
        _next();
        startSlideTimer();
}

onBeforeUnmount(()=>{
    stopSlideTimer();

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
            :index="index"
            :direction="direction">
            </CarouselItem>
            <CarouselControls @prev="prev" @next="next"></CarouselControls>
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