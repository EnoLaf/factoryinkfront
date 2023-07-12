<script setup>
import { RouterView } from 'vue-router';
import Navbar from "./components/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<template>
<Navbar></Navbar>

<RouterView></RouterView>

<Footer></Footer>
</template>

<script>


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>
/* Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;500;600&display=swap');

/* CSS Reset */
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  /* colors */
  --black : #14110E;
  --light-grey: #EFEFF1;
  --light-grey-70: rgba(239,239,241,0.7);
  --light-grey-10: rgba(239,239,241,0.1);
  --logo-color: #E65500;
  --bronze: #CC6633;
  --bronze-75: rgba(204,102,51,0.75);
  --bronze-50: rgba(204,102,51,0.5);
  --bronze-30: rgba(204,102,51,0.3);

  background-color: var(--black);
  color: var(--light-grey);
}
</style>


