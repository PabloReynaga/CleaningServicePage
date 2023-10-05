<script setup>
const props = defineProps(['total', 'currentIndex'])
const emit = defineEmits(['switch'])
</script>
<template>
    <div class="carousel-indicators">
        <button 
        class="carousel-indicator-item"
        :class="{active: currentIndex === index}" 
        v-for="(item,index) in total" 
        :key="index"
        @click="$emit('switch', index)">
    </button>
    </div>
</template>
<style lang="scss">

.carousel-indicators{
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 25px;
    background-color: transparent;
    width: auto;
    height: auto;
   

}
.carousel-indicator-item{
    width: 30px;
    height: 4px;
    border: none;
    background-color: $grey;
    margin: 5px;
    opacity: .5;
    cursor: pointer;
    
    

   
}
.active{
    opacity: 1;
    background-color: $white;
}
</style>
