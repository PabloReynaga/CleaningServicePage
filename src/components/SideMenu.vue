<script setup>

const props = defineProps(['closedSideBar'])
const emit = defineEmits(['customChange'])

</script>

<template>
    <div class="main-container">
       
        <div :class="[closedSideBar? 'side-menu-container' : 'close-side-menu-container' ]"  >
        <div class="side-menu-header">
            <button class="dropdown-menu-button" @click="($emit('customChange'))">
                <img class="x-img" src="../icon/x.png" alt="">
            </button>

        </div>
        <div class="divider"></div>
        <div class="side-menu-body">
            <a href="#home" class="items home" @click="($emit('customChange'))">Home</a>
            <div class="line"></div>
            <a href="#leistung" class="items leistung" @click="($emit('customChange'))">Leistung</a>
            <div class="line"></div>
            <a href="#preise" class="items preise" @click="($emit('customChange'))">Preise</a>
            <div class="line"></div>
            <a href="#kontakt" class="items kontakt" @click="($emit('customChange'))">Kontakt</a>
            <div class="line"></div>
            <div class="footer-sidemenu">
            </div>
        </div>
        </div>
            
      
       
    </div>
   
</template>

<style scoped lang="scss">
.side-menu-container{
    height: calc(100% - 1px) ;
    width: 65%;
    top: 0px;
    right: 0px;
    position: absolute;
    transition: 3s;
    background-color: $white;
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
    opacity: 0;

        
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
            width: 65%;
            background-color: $white;
        }
    }


.items{
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 20px;
    margin: 30px;
    color: $black;
    vertical-align: center; 
    transform: translateX( 10%);
   
   

    
   
}
.side-menu-body{
    
    width: auto;
    height: auto;

}
.line{
    position: relative;
    width: 85%;
    margin-left: auto;
    border: 1px solid $grey;
 
    
}
.footer-sidemenu{
    position: absolute;
    z-index: 2000;
    bottom: 0px;
    top: 100%;
    transform: translateY(-100%);
    left: 0;
    right: 0;
    height: 5%;
    border: 1px solid $grey;
   
}
</style>

