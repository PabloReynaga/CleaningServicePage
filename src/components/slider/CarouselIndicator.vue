<script setup>

</script>
<template>
    <div class="carousel-indicators">
        <button class="carousel-indicator-item active">
           
        </button>
        <button class="carousel-indicator-item">
            
        </button>
        <button class="carousel-indicator-item">
            
        </button>
    </div>
</template>
<style lang="scss">

.carousel-indicators{
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 20px;
    cursor: pointer;
    background-color: transparent;

}
.carousel-indicator-item{
    width: 15px;
    height: 15px;
    border: none;
    background-color: $white;
    margin: 2px;
    opacity: .5;
    border-radius: 50%;

   
}
.active{
    opacity: 1;
}
</style>
