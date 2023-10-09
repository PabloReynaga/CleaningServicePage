<script setup>

</script>
<template>
    <div class="main-container">
        <div class="title">
            <h1 v-motion-slide-visible-once-right>Preise</h1>
        </div>
        <div class="secondary-container">
        <div class="block-container">
            <div class="text-container-preis">
                <h3 class="title-text">Faire Preise</h3>
                <p class="text preis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam, reprehenderit inventore asperiores maiores laudantium</p>
            </div>
           
            
        </div>
        <div class="img-container">
            <img src="./../img/deal2.png" alt="" class="img">
        </div>
        <div class="block-container">
            <div class="text-container-zeit">
                <h3 class="title-text">Zeitintervalle</h3>
                <p class="text zeit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam, reprehenderit inventore asperiores maiores laudantium</p>
                
            </div>
           
        </div>
        
        </div>
        <div class="third-container">
            <div class="text-container-gz">
                <h3 class="title-text">Geräte und Zubehör</h3>
                <p class="text gz">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam, reprehenderit inventore asperiores maiores laudantium</p>
                
        </div>
        <div class="text-container-angebot">
                <h3 class="title-text">Ihr persönliches Angebot</h3>
                <p class="text angebot">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam, reprehenderit inventore asperiores maiores laudantium</p>
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