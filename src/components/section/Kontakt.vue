<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const title = ref(null);
const button = ref(null);

onMounted(()=>{
  gsap.from(title.value,{
        scrollTrigger:{
          trigger: title.value,
          toggleActions:"restart none none none",
        },
        y: 20,
        duration:.4,
        delay:.2,
        repeat:2,
        yoyo:true
        
    })
    gsap.from(button.value,{
        scrollTrigger:{
          trigger: button.value,
          toggleActions:"restart none none none",
        },
        y: 20,
        duration:.6,
        delay:.2,
       
        
    })
    

})

</script>
<template>
    <div class="main-container">
      <div class="line"></div>
        <h1 class="title" ref="title">Kontaktieren Sie uns noch heute!</h1>
        <p class="p">So können Sie mit uns Kontakt aufnehmen.</p>

        <div class="formular-info-contaier">
          <div class="info-kontakt">
            <h3 class="subtitle" ref="subtitle_telefon">Telefon</h3>
            <p class="text-subtitle">17661297136 / 040 49205376</p>
            <h3 class="subtitle" ref="subtitle_mail">Email</h3>
            <p class="text-subtitle">
            info@multicleancompany.com
            </p>
            <h3 class="subtitle" ref="subtitle_adresse">Adresse</h3>
            <p class="text-subtitle">
            Bethovenstraße 44, 22083 Hamburg</p>
            <h3 class="subtitle"></h3>
          </div>
          <div class="formular">
            
            <div class="container-input">
                <form action="https://formsubmit.co/reynagafarias@gmail.com" method="post">
                    
                <label class="label-input"  for="name">Name / Firma (Pflichfeld)*</label>
                <input class="input-field name" type="text" id="name" required name="Nombre" autocomplete="off">
            
                <label class="label-input" for="mail">Mail (Pflichfeld)*</label>
                <input class="input-field mail" type="mail" id="mail" required name="Mail" autocomplete="off">
            
                <label class="label-input" for="number">Telefonnummer</label>
                <input class="input-field phone" type="text" id="number" name="Telefonnummer" autocomplete="off">
    
                <label class="label-input" for="massage">Nachricht</label>
                <textarea class="text-area-field" type="text" id="massage" name="Mensaje" placeholder="Nachricht hier eingeben"
                ></textarea>
                <div class="button-container">
                  <button ref="button" class="button">Senden</button>
                </div>
                
                </form>
            </div>
        
        </div>
        
       
        </div>
        <h1 class="title">Wo finden Sie uns?</h1>
        <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.88456455705!2d10.025611076466964!3d53.57767675738986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18932d133a275%3A0x80a39835a4f09142!2sBeethovenstra%C3%9Fe%2044%2C%2022083%20Hamburg!5e0!3m2!1ses-419!2sde!4v1698961035249!5m2!1ses-419!2sde"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </div>

</template>
<style lang="scss" scoped>
.map-container {
  position: relative;
  height: 80vh;
  margin-top: 20px;
  margin-left:10px;
  margin-right:10px ;
  
}

.map-container iframe {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
 
}

.line{
    position: relative;
    width: 100%;
    margin-left: auto;
    border: 1px solid $grey;
    margin-top: 15px;
    margin-bottom: 15px;
 
    
}
.kontakt{
  padding-top: 10px;
  
}
.subtitle{
  display: flex;
  justify-content: center;
  margin-left: 35%;
  
 

 
  
}
.text-subtitle{
  display: flex;
  justify-content: center;
  margin-left: 35%;
  margin-top: 24px;
  
}
.info-kontakt{

  width: 50%;

}

.formular{
  width: 50%;
}
.formular-info-contaier{
  display: flex;
  width: 100%;
}
.container-input{
    display: block;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    align-items: center;
    width: 50%;
}
.input-field{
    justify-content: center;
    display:flex;
    text-align: left;
    box-sizing: border-box;
    width: 120%;
    padding: 8px;
    margin: auto;
    
   
    
  
}
.title{
    display: flex;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    
    
    
}
.label-input{
    justify-content: center;
    display: flex;
    margin: 20px;
    
}
.text-area-field{
    
    justify-content: center;
    align-items: center;
    margin: auto;
    resize: none;
    width: 120%;
    height: 200px;
    padding: 8px;
    border: 1px solid $black;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    
    
   
}
.p, title{

  text-align: center;
  padding-bottom: 5px;
  
 
}
@media only screen and (max-width : 950px ) {
  .formular-info-contaier{
    display: block;
  }
  .info-kontakt{
  width: 100%;
  .subtitle, .text-subtitle{
    margin-left: 0%;
    padding: 0px;
  }
  
}
.formular{
  width: 100%;
  .container-input{
    margin: auto;
    width: 75%;
  }
  .text-area-field{
    width: 100%;
   
  }
  .input-field{
    width: 100%;
    
  }
 
}
.p{
  width: 100%;
}


}
@media only screen and (width >= 1200px){
  .map-container{
    width: 70%;
    margin: auto;
    
  }
  .input-field{
    width: 120%;
  }
  


}

.button{
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-top: auto;
  height: 45px;
  width: 250px;
  padding-top: 10px;
  text-decoration: none;
  color: $black;
  border-radius: 1px;
  border: none;
  background-color: $grey;
  cursor: pointer;
  font-size: 20px;
}
.button:hover{
  color: $white;
  background-color: rgb(55, 55, 55);
}
@media only screen and (width >= 950px) {
  .text-area-field{
    margin-bottom: 100px;
  }
  .button-container{
  position: absolute;
  right: 0;
  left: 0;
  margin-top: -95px;
 
  
 
}
  
}
</style>