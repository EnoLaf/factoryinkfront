<script setup>
import { RouterView } from 'vue-router';
import Navbar from "./components/NavbarComponent.vue";
</script>

<template>
<Navbar></Navbar>

<RouterView></RouterView>
</template>

<script>


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


