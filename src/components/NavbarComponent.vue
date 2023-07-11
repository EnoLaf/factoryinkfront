<!-- src/components/NavbarComponent.vue -->
<template>
    <nav>
        <ul >
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
          <li>
            <router-link to="/shop">Le Shop</router-link>
          </li>
          <li>
            <router-link to="/flash">Flash</router-link>
          </li>
          <li>
            <router-link to="/artistes">Artistes</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link to="/faq">FAQ</router-link>
          </li>
        </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
  };
  </script>
   