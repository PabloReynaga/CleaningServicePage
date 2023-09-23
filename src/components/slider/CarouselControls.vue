<script setup>
const emit = defineEmits(['prev', 'next'])

</script>
<template>
    <button class="carousel-control left" @click="$emit('prev')">Prev</button>
    <button class="carousel-control right" @click="$emit('next')">Next</button>
    </template>
<style lang="scss">
.carousel-control{
    background-color: rgba(0, 0, 0,0.5);
    color: $white;
    border: none;
    display: inline-block;
    position: absolute;
    top: calc(50% - 25px);
    height: 30px;
    width: 70px;
    cursor: pointer;

}
.left{
    left: 0;

}
.right{
    right: 0;
}
</style>