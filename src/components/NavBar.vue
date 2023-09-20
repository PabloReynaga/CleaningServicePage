<script setup>
import SideBar from './SideMenu.vue'
import { ref } from 'vue';

const openSideMenu = ref(false);


function changeValue(){
     openSideMenu.value = !openSideMenu
}

</script>

<template>
    <div>
    <div class="navbar-container">
        
        <div class="main-logo-container">
        
        </div>
        
        <div class="nav-items-container">
            <a href="#home" class="items">Home</a>
            <a href="#leistung" class="items">Leistung</a>
            <a href="#preise" class="items">Preise</a>
            <a href="#kontakt" class="items">Kontakt</a>
        </div>

        <button class="dropdown-menu-button" @click="openSideMenu=!openSideMenu" >
            
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.7"  viewBox="0 0 50 50" width="30px" height="32px">
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/>
            </svg>

        </button>
    </div>
    <Transition>
        <div v-show="openSideMenu" >
            <SideBar :closed-side-bar="openSideMenu" @customChange = changeValue ></SideBar>
            <div :class="[openSideMenu? 'transparent-block': 'transparent-block-close']">
                <button class="button-transparent-block" @click="changeValue()"></button>
            </div>
        </div> 
        
    </Transition> 
    <div class="divider"></div>
    
    
    </div>
</template>

<style scoped lang="scss">
    .navbar-container{
        left: 0;
        top:0;
        height: 4rem;
        width: 100%;
        padding: 20px 50px;
        background-color: $white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        box-sizing: border-box;
   
    }
    .divider{
        border: solid 1px $grey;
    }
    
    .dropdown-menu-button{
        display: flex;
        justify-content: center;
        align-content: center;
        padding-top: 4px ;
        background-color: $white;
        height: 45px;
        width: 50px;
        float: right;
        border: 2px solid $grey;
        border-radius: 5px;
        margin-left: 5px;
        
    }
    .dropdown-menu-button:hover{
        background-color: $grey;
    }
    .nav-items-container{
        text-decoration: none;
        font-size: 14px ;

    }
    .items{
        text-decoration: none;
        margin-left: 20px;
        font-size: 22px;
        color: $grey;
    }
    .items:hover{
        color: $black;
    }
    
    @media only screen and (min-width:650px){
    .dropdown-menu-button{
            display: none;
    }   }
   @media only screen and (max-width:650px){
    .nav-items-container{
        display: none;
    }
   }
   @keyframes smoothTrasparentBlock{
    0%{
        width: 0%;
    }
    100%{
        width: 100%;
    }

   }
   .transparent-block{
    position: absolute;
    right: 0;
    z-index: 100;
    background-color: $black;
    width: 100%;
    height: 100%;
    font-size: 100px;
    opacity: 0.8;
    animation-name: smoothTrasparentBlock;
    animation-duration: .7s;
    transition: 3s;
    
    
   }
   .transparent-block-close{
    position: absolute;
    right: 0;
    z-index: 200;
    background-color: transparent;
    width: 0%;
    height: 100%;
    font-size: 100px;
    opacity: 0.8;
    animation-name: smoothTrasparentBlock;
    animation-duration: .3s;
    transition: .6s;
   
   
   }
   .v-enter-active,
    .v-leave-active {
    transition: opacity 2s ease;
}

.button-transparent-block{
    background-color: transparent;
    width: 50%;
    height: 100%;
    border: none;
}
  


</style>