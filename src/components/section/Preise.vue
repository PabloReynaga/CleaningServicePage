<script setup>

</script>
<template>
    <div class="main-container">
        <div class="title">
            <h1>Preise</h1>
        </div>
        <div class="textos1"></div>
        <div class="img-container">
            <img src="./../img/deal2.png" alt="" class="img">
        </div>
        <div class="texts2">
            
        </div>
        
    </div>
    

</template>
<style lang="scss" scoped>
.main-container{
  
    
}
.title{
    display: flex;
    justify-content: center;
}
.main-container{
    min-height: 100%;
    min-width: 100%;
}
.img{
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    padding-top: 10%;
    transform:translateX(-50%);
    object-fit:contain;
    object-position:center ;

}

</style>