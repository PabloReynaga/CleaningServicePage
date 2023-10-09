<script setup>
const emit = defineEmits(['prev', 'next'])

function swipeRight(){
    emit('prev')
}
function swipeLeft(){
    emit('next')
}

</script>
<template>
    <div class="left-button-swipe" v-touch:swipe="swipeRight" v-touch:swipe.left="swipeLeft"></div>
        <button class="carousel-control left" @click="$emit('prev')" >
    <svg class="svg-icon" 
        viewBox="0 0 1024 1024" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M696.704 166.128c9.712 8.928 10 23.664 0.608 32.896L362.208 529.376c-9.392 9.232-24.88 9.504-34.608 0.56-9.728-8.928-10-23.648-0.608-32.896l335.088-330.336C671.488 157.456 686.976 157.216 696.704 166.128z"  />
        <path d="M698.224 855.712c-8.496 10.192-23.056 11.008-32.496 1.84l-338.08-326.8c-9.44-9.168-10.208-24.88-1.696-35.056 8.512-10.192 23.056-11.008 32.496-1.84l338.08 326.784C705.952 829.824 706.72 845.536 698.224 855.712z"  />
    </svg>
    </button>
    
    
    <div class="right-button-container">
        <button class="carousel-control right" @click="$emit('next')" >
        <svg class="svg-icon"  
            viewBox="0 0 1024 1024" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M672 512 672 512 352 192 320 224 624 528 320 832 352 864 688 528Z"  />
        </svg>
    </button>


    </div>
   
    </template>
<style lang="scss" scoped>
.carousel-control{
    background-color: transparent;
    border: none;
    display: inline-block;
    position: absolute;
    top: calc(50% - 25px);
    height: 50px;
    width: 60px;
    cursor: pointer;

}
.left{
    left: 0;
   

}
.right{
    right: 0;
    margin: auto;
   
}
.svg-icon{
    height: 100%;
}
.left-button-swipe{
    position: absolute;
    top: 0;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    text-decoration: none;
   
        
}

</style>