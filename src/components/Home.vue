<script>

</script>
<template>

    <div class="img-container">
        <img class="img" src="./img/photo1.png" >
        <div class="title-container">
            <h1 class="title-home">Schön Sauber</h1>
        </div>
        
    </div>
    

</template>
<style scoped lang="scss">

.img-container{
    display: flex;
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
    position: absolute;
    
    color: $white;
    font-size: 40px;
 
}
.title-container{
    height: 100%;
    width: 100%;

}

</style>