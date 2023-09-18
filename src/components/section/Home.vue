<script setup>

let slides = ['./img/photo1.png','./img/photo2.png', './img/photo3.png' ]



</script>
<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item" v-for="slide in slides" :key="slide">
                <div class="img-container">
                    <img class="img" :src="slide" >
                </div>
            </div>
        </div>
        <div class="title-container">
            <h1 class="title-home">Schön Sauber</h1>
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

</style>