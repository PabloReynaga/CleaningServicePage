<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const text1 = ref(null);
const text1_subtitle = ref(null);
const text2 = ref(null);
const text2_subtitle = ref(null);
const text3 = ref(null);
const text3_subtitle = ref(null);
const text4 = ref(null);
const text4_subtitle = ref(null);
const title = ref(null);
const imagen = ref(null);

gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
    gsap.from(text1.value,{
        scrollTrigger:{
            trigger: text1.value,
            toggleActions: "restart none none none",

        },
        x:-200,
        duration: 1.5
    })
})



</script>
<template>
    <div class="main-container">
        <div class="title">
            <h1 ref="title">Preise</h1>
        </div>
        <div class="secondary-container">
        <div class="block-container">
            <div class="text-container-preis">
                <h3 class="title-text" ref="text1_subtitle">Faire Preise</h3>
                <p class="text preis" ref="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam, reprehenderit inventore asperiores maiores laudantium</p>
            </div>
        </div>
        <div class="img-container">
            <img src="./../img/deal2.png" alt="" class="img">
        </div>
        <div class="block-container">
            <div class="text-container-zeit">
                <h3 class="title-text" ref="text2_subtitle">Zeitintervalle</h3>
                <p class="text zeit" ref="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam, reprehenderit inventore asperiores maiores laudantium</p>
            </div>
           
        </div>
        
        </div>
        <div class="third-container">
            <div class="text-container-gz">
                <h3 class="title-text" ref="text3_subtitle">Geräte und Zubehör</h3>
                <p class="text gz" ref="text3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam, reprehenderit inventore asperiores maiores laudantium</p>
                
        </div>
        <div class="text-container-angebot">
                <h3 class="title-text" ref="text4_subtitle">Ihr persönliches Angebot</h3>
                <p class="text angebot" ref="text4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam, reprehenderit inventore asperiores maiores laudantium</p>
            </div>

        </div>

        
    </div>
    

</template>
<style lang="scss" scoped>
.main-container{
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 0px;
  
 
  
    
}
.title{
    display: flex;
    justify-content: center;
    margin: 15px;
}

.img{
    position: relative;
    justify-content: center;
    max-height: 100%;
    max-width:100%;
    left: 50%;
    top: 15%;
    transform:translateX(-50%);
    object-fit:contain;
    object-position:center;
}

.block-container{
    display: block;
    
    width: 50%;
}
.text{
    display: block;
    text-align: center;
    justify-content: center;
    padding: 5px;
    max-width: 70%;
    margin: auto;
  
  
    
}
.title-text{
    display: flex;
    justify-content: center;
    text-align: center;
    
    
}
.secondary-container{
    display: flex;
}
.third-container{
    display: flex;
    padding-top: 45px;
}
.text-container-angebot {
    display: block;
   
    
   
    

}

@media only screen and (width <= 700px){
.third-container{
    display: block;
   padding-top: 0px;
}
.img{
    margin-top: 30px;
    width: 50%;
    height: 50%;
}

.secondary-container{
    display: block;
    width: 100%; 
}
.block-container{
    width: 100%;
    margin-top: 30px;
}

.main-container{
    justify-content: center;
}

}
@media only screen and (width >= 1100px){
.main-container{
    margin-left: 15%;
  margin-right: 15%;
}
}
</style>