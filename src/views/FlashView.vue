<script setup>
import Gallery from "../components/GalleryPatternComponent.vue";
</script>

<template>

  <section class="flash">
    
    <div class="title">
      <div class="line" id="first-line"></div>
      <p>Flash</p>
      <div class="line" id="second-line"></div>
    </div>

    <p class="presentation">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, posuere 
      vel condimentum vel, consectetur in lacus. Sed sed massa vitae risus feugiat maximus. 
      Nulla malesuada quam justo, non malesuada velit tincidunt at. Sed mollis venenatis sodales. 
      Aenean ex neque, auctor at faucibus at, porttitor a risus. Etiam est ex, porta sed nulla a, 
      imperdiet ultricies tortor. Morbi interdum libero id elementum pretium.
    </p>

  </section>

  <section class="tattoos">
    <Gallery class="gallery"></Gallery>
    <Gallery class="gallery"></Gallery>
    <Gallery class="gallery"></Gallery>
    <Gallery class="gallery"></Gallery>
    <Gallery class="gallery"></Gallery>
  </section>

</template>

<script>
  export default {
    name: "FlashView",
    components: {
      Gallery
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
.flash{
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 75rem;
  margin-left: auto;
  margin-right: auto;
}
.title p{
  font-family: 'Noto Serif';
  font-size: 1.625rem;
  font-weight: 600;
  font-variant: small-caps;
}
.line{
  height: 2px;
  background-color: var(--logo-color);
}
#first-line{
  width: 11rem;
}
#second-line{
  width: 45rem;
}
.presentation{
  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  width: 75rem;
}
.tattoos{
  margin-top: 4rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gallery{
  margin-top: 2rem;
}

/* Responsive */
/* Mobile */
@media (max-width : 480px) {
  .title{
    justify-content: flex-start;
  }
  .title p{
    font-size: 1.125rem;
    margin-left: 2rem;
  }
  #first-line{
    width: 13.5rem;
  }
  #second-line{
    display: none;
  }
  .presentation{
    font-size: 1rem;
    width: 19rem;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width : 1024px) {
  .title{
    justify-content: flex-start;
  }
  .title p{
    font-size: 1.5rem;
    margin-left: 3rem;
  }
  #first-line{
    width: 28rem;
  }
  #second-line{
    display: none;
  }
  .presentation{
    font-size: 1.125rem;
    width: 41rem;
  }
}
</style>