<script setup>
  import Artist from "../components/ArtistShortComponent.vue";
</script>

<template>

  <div class="banner">
    <h1>Factory Ink Tattoo</h1>
    <h2>Réalisme - Floral - Animal - Graphique</h2>
    <button @click="redirectToContact">Prendre rendez-vous</button>
  </div>

  <section>
    <div class="artist-title">
      <p>Nos Artistes</p>
      <div class="line"></div>
    </div>

    <div class="artists">
      <!-- 
      <Artist profilePicture="/david.jpg" name="David"></Artist>
      <Artist id="artist-2" profilePicture="/veronique.jpg" name="Véronique"></Artist>
      -->
    </div>

    <div class="artists" v-for="artist in jsonData" :key="artist.id">
      <Artist :profilePicture="artist.profilePicture" :name="artist.name"></Artist>
    </div>

    <div class="artists-mobile">

      <div class="artist-1" v-if="artist">
        <svg id="arrow-left" xmlns="http://www.w3.org/2000/svg" width="19" height="26" viewBox="0 0 19 26" fill="none">
        <path d="M17.5 25L2 13.4L17.5 1" stroke="#14110E" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <Artist class="artist" profilePicture="/david.jpg" name="David"></Artist>
        <svg id="arrow-right" xmlns="http://www.w3.org/2000/svg" width="19" height="26" viewBox="0 0 19 26" fill="none" v-if="artist" @click="showNextArtist">
        <path d="M1 1L16.5 12.6L1 25" stroke="#EFEFF1" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="artist-2" v-if="!artist">
        <svg id="arrow-left" xmlns="http://www.w3.org/2000/svg" width="19" height="26" viewBox="0 0 19 26" fill="none" v-if="!artist" @click="showPreviousArtist">
        <path d="M17.5 25L2 13.4L17.5 1" stroke="#EFEFF1" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <Artist class="artist" profilePicture="/veronique.jpg" name="Véronique"></Artist>
        <svg id="arrow-right" xmlns="http://www.w3.org/2000/svg" width="19" height="26" viewBox="0 0 19 26" fill="none">
        <path d="M1 1L16.5 12.6L1 25" stroke="#14110E" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      
    </div>

  </section>
  <section>

    <div class="shop-title">
      <div class="line"></div>
      <p>Le Shop</p>
    </div>

    <div class="shop">
      <img src="shop.jpg" alt="">
      <div class="presentation">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus libero sit amet urna condimentum accumsan. Nam suscipit sit amet magna at semper. </p>
        <button @click="redirectToContact" class="contact-button">Nous contacter</button>
      </div>
    </div>

  </section>

</template>

<script>
  export default {
    name: "HomeView",
    components: {
      Artist
    },
    data() {
      return {
        jsonData : null,
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
    methods: {
      showNextArtist() {
        this.artist = false;
      },
      showPreviousArtist() {
        this.artist = true;
      },
      redirectToContact() {
        this.$router.push('/contact');
      },
    },
    created() {
      // Effectuer la requête HTTP vers l'API pour récupérer le JSON
      fetch('https://127.0.0.1:8000/api/artists/all') // Remplacez l'URL par l'adresse de l'API réelle
        .then(response => response.json())
        .then(data => {
          this.jsonData = data; // Stocker les données JSON récupérées dans la variable jsonData
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
  height: 80vh;
  top: -6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../public/home-banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}
.banner h1{
  font-family: 'Noto Serif';
  font-size: 3rem;
  font-weight: 900;
}
.banner h2{
  margin-top: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-weight: 400;
}
.banner button{
  margin-top: 4rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--black);
  background-color: var(--bronze);
  width: 280px;
  height: 45px;
  border-radius: 10px;
  border: none;
  outline: none;
}
.artist-title{
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}
.artist-title p{
  font-family: 'Noto Serif';
  font-size: 1.625rem;
  font-weight: 600;
  font-variant: small-caps;
}
.artist-title .line{
  width: 70vw;
  height: 2px;
  background-color: var(--logo-color);
  margin-left: 1rem;
}
.artists{
  margin-top: 11rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#artist-2{
  margin-left: 7rem;
}
.artists-mobile{
  display: none;
}
.shop-title{
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
}
.shop-title p{
  margin-top: 11rem;
  font-family: 'Noto Serif';
  font-size: 1.625rem;
  font-weight: 600;
  font-variant: small-caps;
  margin-left: 1rem;
}
.shop-title .line{
  width: 70vw;
  height: 2px;
  background-color: var(--logo-color);
}
.shop{
  margin-top: 7.5rem;
  margin-bottom: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.shop img{
  height: 30rem;
  width: 41rem;
}
.presentation{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.presentation p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.625rem;
  font-weight: 400;
  width: 31rem;
  height: 10rem;
}
.contact-button{
    background-color: var(--bronze);
    width: 195px;
    height: 45px;
    margin-top: 4rem;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    outline: none;
    border: none;
}

/* Responsive */
/* Mobile */
@media (max-width : 480px) {
  .banner{
    height: 60vh;
  }
  .banner h1{
    font-size: 1.5rem;
  }
  .banner h2{
    margin-top: 1.5rem;
    font-size: 1rem;
  }
  .banner button{
    font-size: 1rem;
    width: 210px;
  }
  .artist-title p{
    font-size: 1.125rem;
  }
  .artist-title .line{
    width: 60vw;
  }
  .artists{
    display: none;
  }
  .artists-mobile{
    margin-top: 4rem;
    display: flex;
  }
  .artist-1, .artist-2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  #arrow-right{
    margin-left: 2.3rem;
    margin-top: 5.5rem;
  }
  #arrow-left{
    margin-right: 2.3rem;
    margin-top: 5.5rem;
  }
  .shop-title p{
    margin-top: 3.62rem;
    font-size: 1.125rem;
  }
  .shop-title .line{
    width: 60vw;
  }
  .shop{
    flex-direction: column;
    margin-top: 5rem;
    margin-bottom: 4.7rem;
  }
  .shop img{
    width: 21rem;
    height: 21rem;
  }
  .shop p{
    margin-top: 3rem;
    font-size: 0.9375rem;
    width: 22rem;
    height: 4.5rem;
    text-align: center;
  }
  .contact-button{
    margin-top: 2.5rem;
    width: 145px;
    font-size: 1rem;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width : 1024px) {
  .banner{
    height: 60vh;
  }
  .banner h1{
    font-size: 2.5rem;
  }
  .banner h2{
    margin-top: 1.88rem;
    font-size: 1.5rem;
  }
  .banner button{
    margin-top: 4.8rem;
    font-size: 1.25rem;
  }
  .artist-title p{
    font-size: 1.625rem;
  } 
  .artist-title .line{
    width: 60vw
  }
  .shop-title p{
    margin-top: 8rem;
    font-size: 1.625rem;
  } 
  .shop-title .line{
    width: 60vw
  }
  .shop{
    flex-direction: column;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
  .shop img{
    width: 43.75rem;
    height: 21rem;
  }
  .shop p{
    text-align: center;
    font-size: 1.375rem;
    margin-top: 4rem;
    width: 37.5rem;
    height: 5rem;
  }
  .contact-button{
    margin-top: 2.5rem;
  }
}
</style>