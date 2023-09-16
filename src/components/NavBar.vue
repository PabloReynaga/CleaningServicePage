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

        </div>

        <button class="dropdown-menu-button" @click="openSideMenu=!openSideMenu" >
            
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.7"  viewBox="0 0 50 50" width="30px" height="32px">
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/>
            </svg>

        </button>
    </div>
    <div v-show="openSideMenu" >
            <SideBar @customChange = changeValue></SideBar>
        </div> 
        
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
   


</style>