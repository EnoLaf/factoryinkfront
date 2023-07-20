<script setup>
import Gallery from "../components/GalleryComponent.vue";
</script>

<template>

  <div class="banner"></div>

  <section class="shop">

    <div class="title">
      <div class="line" id="first-line"></div>
      <p>Le Shop</p>
      <div class="line" id="second-line"></div>
    </div>

    <div class="presentation">
      <p id="first-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, posuere vel condimentum vel, 
        consectetur in lacus. Sed sed massa vitae risus feugiat maximus. Nulla malesuada quam justo, non malesuada 
        velit tincidunt at. Sed mollis venenatis sodales. Aenean ex neque, auctor at faucibus at, porttitor a risus. 
        Etiam est ex, porta sed nulla a, imperdiet ultricies tortor. Morbi interdum libero id elementum pretium.
      </p>
      <p id="second-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, posuere vel condimentum vel, 
        consectetur in lacus. Sed sed massa vitae risus feugiat maximus. Nulla malesuada quam justo, non malesuada 
        velit tincidunt at. Sed mollis venenatis sodales. Aenean ex neque, auctor at faucibus at, porttitor a risus. 
        Etiam est ex, porta sed nulla a, imperdiet ultricies tortor. Morbi interdum libero id elementum pretium.
      </p>
    </div>

    <div class="line" id="third-line"></div>
  </section>

  <section>
    <Gallery class="gallery"></Gallery>
  </section>
  <div class="empty"></div>

</template>

<script>
  export default {
    name: "ShopView",
    components: {
      Gallery
    },
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
  background-image: url("../../public/shop-banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}
.shop{
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
  margin-top: 11rem;
  margin-bottom: 11rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
}
.presentation p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  width: 33.5rem;
}
#third-line{
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7rem;
  width: 75rem;
}
.empty{
  height: 7rem;
}


/* Responsive */
/* Mobile */
@media (max-width : 480px) {
  .banner{
    height: 60vh;
  }
  .title{
    justify-content: flex-start;
  }
  .title p{
    font-size: 1.125rem;
    padding-left: 0.75rem;
  }
  #first-line{
    width: 13.5rem;
  }
  #second-line{
    display: none;
  }
  .presentation{
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 20rem;
  }
  .presentation p{
    font-size: 1rem;
    width: 20rem;
  }
  #second-p{
    margin-top: 3rem;
  }
  #third-line{
    width: 20rem;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width : 1024px) {
  .banner{
    height: 60vh;
  }
  .title{
    justify-content: flex-start;
  }
  .title p{
    font-size: 1.5rem;
    padding-left: 2rem;
  }
  #first-line{
    width: 28rem;
  }
  #second-line{
    display: none;
  }
  .presentation{
    margin-top: 6rem;
    margin-bottom: 6rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 33.5rem;
  }
  .presentation p{
    font-size: 1.25rem;
    width: 33.5rem;
  }
  #second-p{
    margin-top: 4rem;
  }
  #third-line{
    width: 33.5rem;
  }
  .gallery{
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
}
</style>