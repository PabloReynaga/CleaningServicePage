<script setup>

import PhotosPres from '../PhotosPres.vue';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';


const textoRight = ref(null);
const textoLeft = ref(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
    gsap.from(textoLeft.value,{
        scrollTrigger:{
          trigger: textoLeft.value,
          toggleActions:"restart none none none",
        },
        duration: 2,
        x:-200
    }), 
    gsap.from(textoRight.value,{
        scrollTrigger:{
          trigger: textoRight.value,
          toggleActions:"restart none none none"
        },
        duration: 1,
        x:-150
    })
})

</script>
<template>
<div class="main-container" >
    <div class="container" ref="textoRight" >
        <h1 class="title">Über uns</h1>
        <p class="text">Wir sind eine leidenschaftliche Reinigungsfirma aus Hamburg, die Sauberkeit und Zufriedenheit in den Mittelpunkt stellt. Unsere Mitarbeiter liefern erstklassigen Service und strahlende Ergebnisse</p>
    </div>
    <div class="container" ref="textoLeft" >
        <h1 class="title">Leistung</h1>
        <p class="text botton">Wir bieten Spitzenqualität in jeder Reinigungsaufgabe. Verlassen Sie sich auf uns, um Ihre Erwartungen in kurzer Zeit zu erfüllen und makellose Sauberkeit zu gewährleisten</p>
    </div>
    <div class="photos-container">
        <PhotosPres></PhotosPres>
    </div>
</div>

</template>
<style lang="scss" scoped>
.title{
    justify-content: center;
    display: flex;
    padding-top: 25px ;
    
    
}
.text{
    display: flex;
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    line-height: 1.8;
    text-align: center;
    
}
@media only screen and (width >= 1000px) { 
    
    .container{
        display: block;
        width: 700px;
        justify-content: center;
        margin: auto;
    }
    
}



</style>