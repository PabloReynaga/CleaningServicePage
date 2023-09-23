<script setup>


const props = defineProps(['slide', 'currentSlide', 'index']);


</script>
<template>
    <transition name="slide-in"> 
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
.slide-in-leave-active{
    transition: all 1s ease-in-out;
}
.slide-in-enter-from{
    transform: translateX(-100%);
}
.slide-in-leave-to{
    transform: translateX(100%);
}
</style>