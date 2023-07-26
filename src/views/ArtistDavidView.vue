<script setup>
</script>

<template>

  <h1>David</h1>

  <section>
  </section>

</template>

<script>
  export default {
    name: "ArtistDavidView",
    components: {
      
    },
  data() {
    return {
      
    }

  },
  methods: {
    redirectToContact() {
      this.$router.push(this.link);
    },
  },
  }
</script>

<style scoped>

/* Responsive */
/* Mobile */
@media (max-width : 480px) {
  
}

/* Tablet */
@media (min-width: 481px) and (max-width : 1024px) {
  
}
</style>