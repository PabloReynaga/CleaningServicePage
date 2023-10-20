<script setup>
import SideBar from './SideMenu.vue'
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

const openSideMenu = ref(false);
const item1 = ref(null);
const item2 = ref(null);
const item3 = ref(null);
const item4 = ref(null);
const item = ref(null);

function changeValue(){
     openSideMenu.value = !openSideMenu
}

gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
    gsap.from(item1.value,{
        delay:0.4,
        x:-1500,
        duration:1
        
    }),
    gsap.from(item2.value,{
        delay:0.3,
        x:-1500,
        duration:1
    }),
    gsap.from(item3.value,{
        x:-1500,
        delay:0.2,
        duration:1
    }),
    gsap.from(item4.value,{
        delay:0.1,
        x:-1500,duration:1
    })
    gsap.from(item.value,{
      x:200,
      duration:.5
    })
})

</script>

<template>
    <div>
    <div class="navbar-container">
        
        <div class="main-logo-container">
        
        </div>
        
        <div class="nav-items-container">
            <a ref="item1" href="/#home" class="items activo">Home</a>
            <a ref="item2" href="/#leistung" class="items">Leistung</a>
            <a ref="item3" href="/#preise" class="items">Preise</a>
            <a ref="item4" href="/#kontakt" class="items">Kontakt</a>
        </div>

        <button class="dropdown-menu-button" @click="openSideMenu=!openSideMenu" ref="item">
            
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
        display: inline-block;
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
    height: calc(100% - 4rem);
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
    height: calc(100% - 4rem);
    font-size: 100px;
    opacity: 0.8;
    animation-name: smoothTrasparentBlock;
    animation-duration: .3s;
    transition: .5s;
   
   
   }
   .v-enter-active,
    .v-leave-active {
    transition: opacity .6s ease;
}

.button-transparent-block{
    background-color: transparent;
    width: 50%;
    height: calc(100% - 4rem);
    border: none;
}
.activo{
    color: $black;
}
  


</style>