<script setup>
</script>
<template>
    <div class="main-container">
      <div class="line"></div>
        <h1 class="title">Wo finden Sie uns?</h1>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
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
.title{
  display: flex;
  justify-content: center;
  
}
.line{
    position: relative;
    width: 100%;
    margin-left: auto;
    border: 1px solid $grey;
    margin-top: 15px;
    margin-bottom: 15px;
 
    
}

</style>