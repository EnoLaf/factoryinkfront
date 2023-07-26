<!-- src/components/ArtistShortComponent.vue -->
<template>
    <section class="artist">
        <div class="container">
            <div class="img" :style="{ 'background-image': 'url(' + profilePicture + ')' }"></div>
            <p class="name">{{ name }}</p>
            <button @click="redirectToPortfolio" class="portfolio-button">Portfolio</button>
        </div>
    </section>
</template>

<script>
export default {
name: "ArtistShortComponent",
props: {
    profilePicture : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    link :{
        type : String,
        required : true
    }
},
methods: {
    redirectToPortfolio() {
        this.$router.push(this.link);
    },
},
};
</script>

<style scoped>
.artist{
    display: flex;
    flex-direction: column;
}
.img, .name, .portfolio-button{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.img{
    width: 300px;
    height: 400px;
    border-radius: 20px;
    border: 2px solid var(--logo-color);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.name{
    font-family: 'Noto Serif';
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.56rem;
}
.portfolio-button{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1.44rem;
    margin-left: auto;
    margin-right: auto;
    color: var(--black);
    background-color: var(--bronze);
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
}


/* Responsive */
@media (max-width : 480px) {
    .img{
        width: 200px;
        height: 200px;
    }
    .name{
        font-size: 1.125rem;
    }
    .portfolio-button{
        font-size: 1rem;
        width: 100px;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    .img{
        width: 250px;
        height: 300px;
    }
}

</style>
   