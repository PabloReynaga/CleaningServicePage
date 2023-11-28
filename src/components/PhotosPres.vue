<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";


const item1 = ref(null);
const item2 = ref(null);
const item3 = ref(null);
const item4 = ref(null);
const item5 = ref(null);
const item6 = ref(null);
const item7 = ref(null);
const item8 = ref(null);
const item9 = ref(null);
const img = ref(null);
const title = ref(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
    gsap.from(item1.value,{
        scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:.7
        
    }),
    gsap.from(item2.value,{
        scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:.5
    }),
    gsap.from(item3.value,{
          scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:.3
    }),
    gsap.from(item4.value,{
          scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:1.3
    }),
    gsap.from(item5.value,{
          scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:1.1
    }),
    gsap.from(item6.value,{
        scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:.9
    }),
    gsap.from(item7.value,{
        scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:1.9
    }),
    gsap.from(item8.value,{
          scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:1.7
    }),
    gsap.from(item9.value,{
          scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:1.5
    }),
    gsap.from(title.value,{
        scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        y:-60,
        duration:1,
        delay:.5
       
    })

})

</script>

<template>
    <div class="container-img">
        <h1 ref="title" class="title">Unsere Services</h1>
        <div class="divider"></div>
        <div class="items-main-container">
            <div class="items-inner-container">
               
                <div ref="item1" class="item-div a">
                    <p class="text">Büroreinigung</p>
                    <p class="text-items">Ein sauberes Büro fördert die Produktivität. Wir sorgen für strahlende Desks und frische Arbeitsluft.</p>
                </div>
                <div ref="item2" class="item-div b">
                    <p class="text">Glasreinigung</p>
                    <p class="text-items">Klare Sicht, strahlende Eindrücke. Unsere Glasreinigung verleiht Ihrem Unternehmen makellose Professionalität.</p>
                </div>
                <div ref="item3" class="item-div c">
                    <p class="text">Küchen</p>
                    <p class="text-items">Hygiene in der Küche ist unser Anliegen. Wir garantieren Sauberkeit und eine sichere Kochumgebung.</p>
                </div>
                <div ref="item4" class="item-div d">
                    <p class="text">Toiletten</p>
                    <p class="text-items">Saubere Toiletten, frische Atmosphäre. Unser Service sichert makellose Hygiene.</p>
                </div>
                <div ref="item5" class="item-div e">
                    <p class="text">Bars</p>
                    <p class="text-items">Eine einladende Bar beginnt mit Sauberkeit. Unsere Barsreinigung schafft eine makellose Umgebung für Gäste.</p>
                </div>
                <div ref="item6" class="item-div f">
                    <p class="text">Konferenzräume</p>
                    <p class="text-items">Klarheit für kreative Ideen. Unser Reinigungsdienst sorgt für repräsentative Konferenzräume, immer einsatzbereit.</p>
                </div>
                <div ref="item7" class="item-div g">
                    <p class="text">Praxisreinigung</p>
                    <p class="text-items">Höchste Hygienestandards für Ihre Gesundheit. Unsere Praxisreinigungsdienste schützen Patienten und schaffen saubere Räume.</p>
                </div>
                <div ref="item8" class="item-div h">
                    <p class="text">Lagerhallen </p>
                    <p class="text-items">Effizienz durch Sauberkeit. Unsere Lagerhallenreinigung minimiert Unfallrisiken und fördert einen geordneten Betrieb.</p>
                </div>
                <div ref="item9" class="item-div i">
                    <p class="text">Schulen</p>
                    <p class="text-items">Positive Lernumgebung beginnt mit Sauberkeit. Wir schaffen hygienische Räume für Schüler und Lehrer.</p>
                </div>
               
                
            </div>             
        </div>
        <img ref="img" src="./img/layout.png" alt="" class="img">
    </div>
</template>
<style lang="scss" scoped>

.img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position:55%;
    animation-duration: 3s;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
    opacity: .9;
    filter: brightness(.5);
}


.container-img{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    height: 800px;
    width: 100%;
}
.items-main-container{
    
    position: absolute;
    width: 80%;
    z-index: 200;
    flex-wrap: wrap;
    
    
}
.items-inner-container{
    background-color: transparent;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    z-index: 300;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    
}
.item-div{
    width: 35%;
    height: 100px;
    background-color: rgba($color: #000000, $alpha: .2);
    border-radius:5px;
    margin: 15px;
  
}


.text{
    display: block;
    height: auto;
    font-size: 20px;
    padding-top: 0px;
    color: $white;
    text-align: center;
    margin-top: 18px;
    
    
}

.title{
    position: absolute;
    margin-top: 15px;
    color: $black;
    z-index: 200;
}

.divider{
        border: solid 1px $white;
        width: 100%;
        position: absolute;
        z-index: 500;
        margin-top: 65px;
    }

@media screen and (width <= 700px){
    .items-inner-container{
        display: block;
        width: 100%;

    }
    .item-div{
        display: block;
        margin: auto;
        width: 80%;
        height: 50px;
        margin: 15px;

    }
    .img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        object-position:56%;
    }
    
   
}
@media screen and (width <= 1049px) {
    .text-items{
        display: none;
        

    }
    .text{
        padding-top: 15px;
    }
}
@media screen and (width >= 1050px){
    .items-main-container{
    position: absolute;
    width: 90%;
    z-index: 200;
    flex-wrap: wrap;
    
    
    
}

.items-inner-container{
    background-color: transparent;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    z-index: 300;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    
}
.item-div{
    width: 30%;
    height: 210px;
    background-color: rgba($color: #000000, $alpha: .2);
    border-radius:5px;
    margin: 15px;
  
}
.text-items{
   
    color:$white;
    padding: 10px;
    text-align: center;

}
}
</style>