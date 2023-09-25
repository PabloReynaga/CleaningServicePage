<script setup>
import NavBar from './components/NavBar.vue';
import "../src/assets/main.scss"
import Home from '././components/section/Home.vue';
import Leistung from './components/section/Leistung.vue';

</script>

<template>
    <header>
      <NavBar/>
    </header>
  <body>
    <section id="home">
        <Home/>
    </section>
    <section id="leistung">
        <Leistung/>
    </section>
    <section id="preise">
      preise
    </section>
    <section id="kontakt">
      kontakt
    </section>
  

  </body>
</template>

<style scoped>

</style>
