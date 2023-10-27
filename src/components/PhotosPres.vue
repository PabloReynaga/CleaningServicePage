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
        delay:.3
        
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
        delay:.7
    }),
    gsap.from(item4.value,{
          scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:.9
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
        delay:1.3
    }),
    gsap.from(item7.value,{
        scrollTrigger:{
          trigger: item1.value,
          toggleActions:"restart none none none",
        },
        x:-800,
        duration:1,
        delay:1.5
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
        delay:1.9
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
        <img ref="img" src="./img/layout.png" alt="" class="img">
        <h1 ref="title" class="title">Unsere Services</h1>
        <div class="divider"></div>
        <div class="items-main-container">
            <div class="items-inner-container">
               
                <div ref="item1" class="item">
                    <p class="text">
                    Büroreinigung
                    </p>
                </div>
                <div ref="item2" class="item">
                    <p class="text">
                        Glasreinigung
                    </p>
                </div>
                <div ref="item3" class="item">
                    <p class="text">
                        Küchen
                    </p>
                </div>
                <div ref="item4" class="item">
                    <p class="text">
                         Toiletten
                    </p>
                </div>
                <div ref="item5" class="item">
                    <p class="text">
                        Bars
                    </p>
                </div>
                <div ref="item6" class="item">
                    <p class="text">
                        Konferenzräume
                    </p>
                </div>
                <div ref="item7" class="item">
                    <p class="text">
                        Praxisreinigung
                    </p>
                </div>
                <div ref="item8" class="item">
                    <p class="text">
                        Lagerhallen
                    </p>
                </div>
                <div ref="item9" class="item">
                    <p class="text">
                        Schulen
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
    width: 100%;
    

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
    color: $white;
    
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