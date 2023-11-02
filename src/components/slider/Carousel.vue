<script setup lang="ts">

import { onBeforeUnmount, onMounted, ref } from 'vue';
import CarouselItem from './CarouselItem.vue';
import CarouselControls from './CarouselControls.vue';
import CarouselIndicator from './CarouselIndicator.vue'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

const currentSlide = ref(0);
const slideInterval = ref(0);
const direction = ref("right");
const title = ref(null);
const subtitle = ref(null);

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

function prev(step = - 1){
        const index = currentSlide.value > 0 ? currentSlide.value + step : props.slides.length - 1; 
        SetCurrentSlide(index);
        direction.value = "left" 
        startSlideTimer();
}
function _next(step = 1){
    const index = currentSlide.value < props.slides.length -1 ? currentSlide.value + step : 0; 
        SetCurrentSlide(index); 
        direction.value = "right"

}
function next(step = 1){
        _next(step);
        startSlideTimer();
}

onBeforeUnmount(()=>{
    stopSlideTimer();

})
function switchSlide(index){
    const step = index - currentSlide.value;
    if(step>0){
        next(step)
    }else{
        prev(step)
    }
}

gsap.registerPlugin(ScrollTrigger);
onMounted(()=>{
    gsap.from(title.value,{
        delay:0.2,
        y:-70,
        duration:1
    })
    gsap.from(subtitle.value,{
        delay: 0.2,
        y:70,
        duration:1
    })
    
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
            
            <CarouselIndicator 
            :total="slides.length"
            :current-index="currentSlide"
            @switch="switchSlide($event)"
            >
            </CarouselIndicator>
        </div>
        <div class="title-container">
            <h1 class="title-home" ref="title">Schnell Sauber</h1>
            <p class="subtitle" ref="subtitle">
                Ihr partner für glänzende Ergebnisse.
            </p>
            <a href="#kontakt" class="button" ref="button">
                <p class="a-text"> Kontaktieren Sie uns!</p>
        </a>
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
    top:140px;
    background-color: $black;
    padding-left: 10px;
    padding-right: 10px ;
    width: 300px;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.400);
}
.title-container{
   
    width: auto;

}
.carousel{
    display: block;
    justify-content: center;
    
   
}

.carousel-inner{
    position:absolute;
    height: calc(100% - 4rem);
    width: 100%;
    overflow: hidden;
    
    

}
.subtitle{
    position:absolute;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    left: 0;
    right: 0;
    color: $white;
    font-size: 25px;
    background: rgba(0, 0, 0, 0.400);
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px ;
    top:180px;
    width: 300px;
    border-radius: 2px;
  
    

}
.button{
  position: absolute;
  left: calc(50% - 125px);
  right: 0;
  top:calc(80%);
  bottom: 0; 
  height: 45px;
  width: 250px;
  text-decoration: none;
  color: $black;
  border-radius: 1px;
  border: none;
  background-color: $grey;
  cursor: pointer;
  font-size: 20px;
}
.button:hover{
  color: $white;
  background-color: rgb(55, 55, 55);
}
@media only screen and ( width >= 600px){
    .subtitle{
        width: 550px;
    }
}
.a-text{
    text-align: center;
    margin-top: 9px;
}
</style>