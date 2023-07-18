<script setup>
</script>

<template>

  <h1>Flash</h1>

  <section>
  </section>

</template>

<script>
  export default {
    name: "FlashView",
    components: {
      
    },
    data() {
      return {
        
      }

    },
    methods: {
      
    }
  }
</script>

<style scoped>
.banner{
  width: 100vw;
  height: 80vh;
  top: -6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../public/banniere.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}

/* Responsive */
/* Mobile */
@media (max-width : 480px) {
  .banner{
    height: 60vh;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width : 1024px) {
  .banner{
    height: 60vh;
  }
}
</style>