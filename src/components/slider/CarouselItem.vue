<script setup>

const props = defineProps(['slides']);


</script>
<template>
    <div>
        <div class="carousel-item" v-for="slide in slides" :key="slide">
                <div class="img-container">
                    <img class="img" :src="slide" >
                </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.img-container{
    display: block;
    height: 800px;
    width: 100%;
    z-index: 1;
}

.img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position: center;


} 
</style>