<script setup>
  import Artist from "../components/ArtistShortComponent.vue";
</script>

<template>

  <h1>Home Page</h1>

  <div class="artists">

    <Artist profilePicture="/david.jpg" name="David"></Artist>
    <Artist id="artist-2" profilePicture="/veronique.jpg" name="Véronique"></Artist>

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

  <!-- 
  <div class="artists" v-for="artist in artists" :key="artist.name">
    <Artist :profilePicture="artist.profilePicture" :name="artist.name"></Artist>
  </div>
  --> 

</template>

<script>
  export default {
    name: "HomeView",
    components: {
      Artist,
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
    methods: {
      showNextArtist() {
        this.artist = false;
      },
      showPreviousArtist() {
        this.artist = true;
      },
    }
  }
</script>

<style scoped>
.artists{
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

/* Responsive */
@media (max-width : 480px) {
  .artists{
    display: none;
  }
  .artists-mobile{
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

}

@media (min-width: 481px) and (max-width : 1024px) {

}
</style>