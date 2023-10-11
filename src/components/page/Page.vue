<script setup>
import Home from '../section/Home.vue';
import Leistung from '../section/Leistung.vue';
import Preise from '../section/Preise.vue'
import Kontakt from '../section/Kontakt.vue';
import FooterBar from '../FooterBar.vue';
</script>
<template>
    <body>
    <section id="home">
        <Home/>
    </section>
    <section id="leistung">
        <Leistung/>
    </section>
    <section id="preise">
      <Preise/>
    </section>
    <section id="kontakt">
      <Kontakt/>
    </section>
  </body>
  <footer>
    <FooterBar/>
  </footer>

</template>