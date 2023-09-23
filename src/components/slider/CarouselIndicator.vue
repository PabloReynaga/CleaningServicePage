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
    bottom: 20px;
    background-color: transparent;

}
.carousel-indicator-item{
    width: 15px;
    height: 15px;
    border: none;
    background-color: $grey;
    margin: 4px;
    opacity: .5;
    border-radius: 50%;
    cursor: pointer;

   
}
.active{
    opacity: 1;
    background-color: $white;
}
</style>
