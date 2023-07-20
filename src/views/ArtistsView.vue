<script setup>
import ArtistLeft from "../components/ArtistLeftComponent.vue";
import ArtistRight from "../components/ArtistRightComponent.vue";
</script>

<template>

  <div class="banner"></div>

  <div class="artist-title">
    <div class="line"></div>
    <p>Les Artistes</p>
  </div>

  <section class="artists">
    <ArtistLeft id="artist-1"
      profilePicture="/david.jpg"
      name="David"
      styles="Lorem - Lorem - Lorem"
      presentation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, 
      posuere vel condimentum vel, consectetur in lacus. Sed sed massa vitae risus feugiat maximus. 
      Nulla malesuada quam justo, non malesuada velit tincidunt at. "
    ></ArtistLeft>
    <ArtistRight id="artist-2"
      profilePicture="/veronique.jpg"
      name="Véronique"
      styles="Lorem - Lorem - Lorem"
      presentation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, 
      posuere vel condimentum vel, consectetur in lacus. Sed sed massa vitae risus feugiat maximus. 
      Nulla malesuada quam justo, non malesuada velit tincidunt at. "
    ></ArtistRight>
  </section>

</template>

<script>
  export default {
    name: "ArtistsView",
    components: {
      ArtistLeft,
      ArtistRight
    },
    data() {
      return {
        artist : true,
        artists: [
          {
            name: 'David',
            profilePicture: '/david.jpg'
          },
          {
            name: 'Véronique',
            profilePicture: '/veronique.jpg'
          }
        ]
      }

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
.artist-title{
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
}
.artist-title .line{
  width: 65rem;
  height: 2px;
  background-color: var(--logo-color);
}
.artist-title p{
  font-family: 'Noto Serif';
  font-size: 1.625rem;
  font-weight: 600;
  font-variant: small-caps;
  margin-left: 1rem;
}
#artist-1{
  margin-top: 10rem;
}
#artist-2{
  margin-top: 10rem;
  margin-bottom: 10rem;
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