<script setup>
import { computed } from 'vue';

const props = defineProps(['slide', 'currentSlide', 'index', 'direction']);

const transitionEffect = computed(()=>{
    return props.direction === "right"? "slide-out" : "slide-in";
    
})

</script>
<template>
    <transition :name="transitionEffect"> 
                <div class="img-container" v-show="currentSlide === index">
                    <img class="img" :src="slide" >
                </div>
    </transition>
</template>

<style scoped lang="scss">
.img-container{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position: center;


}
.slide-in-enter-active, 
.slide-in-leave-active,
.slide-out-enter-active, 
.slide-out-leave-active{
    transition: all 1s ease-in-out;
}
.slide-in-enter-from{
    transform: translateX(-100%);
}
.slide-in-leave-to{
    transform: translateX(100%);
}
.slide-out-enter-from{
    transform: translateX(100%);
}
.slide-out-leave-to{
    transform: translateX(-100%);
}
</style>