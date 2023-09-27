<script setup>


</script>
<template>
    <div class="container-img">
        <img src="./img/layout.png" alt="" class="img">
        <h1 class="title">Unsere Services</h1>
        <div class="items-main-container">
            <div class="items-inner-container">
               
                <div class="item">
                    <p class="text">
                    Büroreinigung
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        Glasreinigung
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        Küchen
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        Toilettenreinigung
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        Bars
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        Konferenzräume
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        Praxisreinigung
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        Lagerhallen
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        Schulen
                    </p>
                </div>
               
                
            </div>             
        </div>
        <div class="div-empty"></div>
    </div>
 
    
    

   

</template>
<style lang="scss" scoped>
.container-img{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    height: 800px;
    

}
.img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position:center ;
  
}

.items-main-container{
    left: 0;
    position: absolute;
    background-color: transparent;
    width: 50%;
   
    z-index: 200;
    
}
.items-inner-container{
    
    display: block;
    justify-content: center;
    margin-top: 100px;
    z-index: 300;
    height: 100%;
}
.item{
    display:flex;
    justify-content: right;
    text-align: center;
    margin-top: -10px;
    font-size: 20px;
    animation-name: smoothMoves;
    animation-duration: 3s;
    transition: 3s;
    animation-iteration-count: infinite;
  
}
.div-empty{
    right: 0;
    position: absolute;
    width: 50%;
    height: 800px;
    background-color: transparent;
    z-index: 100;
}


.text{
    display: block;
    justify-content: left;
    width: 175px;
    height: auto;
    border-radius: 10%;
    font-size: 20px;
    padding: 5px;
}
.title{
    position: absolute;
    margin-top: 30px;
}
@keyframes smoothMoves{
    0%{
        color: $black;
    }
    100%{
        color: $black;
    }
}
</style>