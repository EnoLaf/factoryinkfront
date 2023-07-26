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
    <div id="artist-1" v-if="jsonDataArtist1">
        <ArtistLeft 
          :profilePicture="jsonDataArtist1.profilePicture" 
          :name="jsonDataArtist1.name" 
          :styles="jsonDataArtist1.style" 
          :presentation="jsonDataArtist1.resume" 
          :link="jsonDataArtist1.link">
        </ArtistLeft>
    </div>
    <div id="artist-2" v-if="jsonDataArtist2">
        <ArtistRight 
          :profilePicture="jsonDataArtist2.profilePicture" 
          :name="jsonDataArtist2.name" 
          :styles="jsonDataArtist2.style" 
          :presentation="jsonDataArtist2.resume" 
          :link="jsonDataArtist2.link">
        </ArtistRight>
    </div>
    <div id="artist-2-mobile" v-if="jsonDataArtist2">
        <ArtistLeft 
          :profilePicture="jsonDataArtist2.profilePicture" 
          :name="jsonDataArtist2.name" 
          :styles="jsonDataArtist2.style" 
          :presentation="jsonDataArtist2.resume" 
          :link="jsonDataArtist2.link">
        </ArtistLeft>
    </div>
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
        jsonDataArtist1 : null,
        jsonDataArtist2 : null,
      }
    },
    created() {
      // Effectuer la requête HTTP vers l'API pour récupérer le JSON
      fetch('https://127.0.0.1:8000/api/artists/1') // Remplacez l'URL par l'adresse de l'API réelle
        .then(response => response.json())
        .then(data => {
          this.jsonDataArtist1 = data; // Stocker les données JSON récupérées dans la variable jsonData
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du JSON depuis l\'API:', error);
        });
        fetch('https://127.0.0.1:8000/api/artists/3') // Remplacez l'URL par l'adresse de l'API réelle
        .then(response => response.json())
        .then(data => {
          this.jsonDataArtist2 = data; // Stocker les données JSON récupérées dans la variable jsonData
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du JSON depuis l\'API:', error);
        });
    },
  }
</script>

<style scoped>
.banner{
  width: 100vw;
  height: 60vh;
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
#artist-2-mobile{
  display: none;
}

/* Responsive */
/* Mobile */
@media (max-width : 480px) {
  .banner{
    height: 30vh;
  }
  .artist-title .line{
    width: 13rem;
  }
  .artist-title p{
    font-size: 1.125rem;
  }
  #artist-1{
    margin-top: 7rem;
  }
  #artist-2{
    display: none;
  }
  #artist-2-mobile{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width : 1024px) {
  .banner{
    height: 30vh;
  }
  .artist-title .line{
    width: 29rem;
  }
  .artist-title p{
    font-size: 1.5rem;
  }
}
</style>