<script setup>
import {useWindowScroll} from '@vueuse/core'
import { computed, onMounted, onUpdated, ref } from 'vue';
const { x , y} = useWindowScroll();







</script>

<template>
    <div class="container-img">
        <img src="./img/layout.png" alt="" class="img">
        <h1 class="title">Unsere Services</h1>
        <div class="divider"></div>
        <div class="items-main-container">
            <div class="items-inner-container">
               
                <div class="item">
                    <p class="text">
                    -Büroreinigung-
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        -Glasreinigung-
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        -Küchen-
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                         -Toiletten-
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        -Bars-
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        -Konferenzräume-
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        -Praxisreinigung-
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        -Lagerhallen-
                    </p>
                </div>
                <div class="item">
                    <p class="text">
                        -Schulen-
                    </p>
                </div>
               
                
            </div>             
        </div>
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
    object-position:0%;
    animation-name: smoothMoves;
    animation-duration: 3s;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
    opacity: .9;
    filter: brightness(.5);
}

@keyframes smoothMoves{
    0%{
        width: 100%;
        height: 100%;
        object-fit:cover;
        object-position:0%;
    }
    100%{
        width: 100%;
        height: 100%;
        object-fit:cover;
        object-position:58%;
        transition: 5s;
    }
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
    width: 170px;
    height: auto;
    border-radius: 5%;
    font-size: 20px;
    padding: 5px;
    
    background-color: $white;
}

.title{
    position: absolute;
    margin-top: 15px;
}

.divider{
        border: solid 1px $white;
        width: 100%;
        position: absolute;
        z-index: 500;
        margin-top: 65px;
    }
</style>