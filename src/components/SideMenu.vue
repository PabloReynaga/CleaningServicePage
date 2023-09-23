<script setup>
import { onMounted, ref } from "vue";
const props = defineProps(['closedSideBar'])
const emit = defineEmits(['customChange'])

</script>

<template>
    <div>
       
            <div :class="[closedSideBar? 'side-menu-container' : 'close-side-menu-container' ]"  >
        <div class="side-menu-header">
            <button class="dropdown-menu-button" @click="($emit('customChange'))">
                <img class="x-img" src="../icon/x.png" alt="">
            </button>

        </div>
        <div class="divider"></div>
        <div class="side-menu-body"></div>
        </div>
            
      
       
    </div>
   
</template>

<style scoped lang="scss">
.side-menu-container{
    height: 100%;
    width: 50%;
    top: 0px;
    right: 0px;
    position: absolute;
    transition: 3s;
    background-color: $grey;
    animation-name: sideBarSmooth;
    animation-duration: .7s;
    z-index: 200;
  
}
.close-side-menu-container{
    height: 100%;
    width: 0%;
    top: 0px;
    right: 0px;
    position: absolute;
    transition: .8s;
    background-color: transparent;
    animation-name: sideBarSmooth;
    animation-duration: .2s;
    z-index: 200;

        
    }
   

.divider{
        border: solid 1px $grey;
        margin-top: 4rem;
        
    }

    .dropdown-menu-button{
        display: flex;
        justify-content: center;
        align-content: center;
        padding-top: 4px;
        background-color: $white;
        height: 45px;
        width: 50px;
        float: right;
        border: 2px solid $grey;
        border-radius: 5px;
        margin: 10px 50px 0px 0px;
        transform: 3s;
    }
    .x-img{
        height: 30px;
        width: 30px;
        opacity: 0.6;
        padding-top: 2px;
    }

    @keyframes sideBarSmooth{
        0%{
            width: 5%;
            background-color: $white ;

        }
        
        100%{
            width: 50%;
            background-color: $grey;
        }
    }


</style>

